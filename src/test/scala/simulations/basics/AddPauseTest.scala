package simulations.basics

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration._
import scala.language.postfixOps

class AddPauseTest extends Simulation {
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in/")

  val pauseDuration: String = "3000";

  val getScenario: ScenarioBuilder = scenario("Get Single user Scenario")
    .exec(
      http("GET API for fetching single user data")
        .get("api/users/2")
    )
  // Fixed Pause
  .pause(3)

  val postScenario: ScenarioBuilder = scenario("Create User scenario")
    .exec(
      http("Post Api to Create api")
        .post("/api/users")
        .body(RawFileBody("data/requestBodyData/createUser.json")).asJson
    )
  //random pause
  pause(3,5)

  val putScenario: ScenarioBuilder = scenario("Update User Scenario")
    .exec(session => session.set("pause", pauseDuration)) // Set the pause duration first
    .exec(
      http("Put API Update User")
        .put("/api/users/2")
        .body(RawFileBody("data/requestBodyData/updateUser.json")).asJson
    )
    .pause(session => (session("pause").as[String].toInt milliseconds)) // Retrieve and convert to FiniteDuration
    //.pause("pause")

  val deleteScenario: ScenarioBuilder = scenario("Delete User Scenario")
    .exec(session => session.set("pause", pauseDuration))
    .exec(
      http("Delete Api Delete user")
        .delete("/api/users/2")
    )
    .pause(session => session("pause").as[String].toInt milliseconds)
    //.pause("pause")

  setUp(
    getScenario.inject(atOnceUsers(10)),
    postScenario.inject(atOnceUsers(10)),
    putScenario.inject(atOnceUsers(10)),
    deleteScenario.inject(atOnceUsers(10))
  ).protocols(httpProtocol)
}
