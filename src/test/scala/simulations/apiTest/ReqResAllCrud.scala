package simulations.apiTest

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class ReqResAllCrud extends Simulation {
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in/")

  val getScenario: ScenarioBuilder = scenario("Get Single user Scenario")
    .exec(
      http("GET API for fetching single user data")
        .get("api/users/2")
    )

  val postScenario: ScenarioBuilder = scenario("Create User scenario")
    .exec(
      http("Post Api to Create api")
        .post("/api/users")
        .body(RawFileBody("data/requestBodyData/createUser.json")).asJson
    )

  val putScenario: ScenarioBuilder = scenario("Update User Scenario")
    .exec(
      http("Put api update user")
        .put("/api/users/2")
        .body(RawFileBody("data/requestBodyData/updateUser.json")).asJson
    )

  val deleteScenario: ScenarioBuilder = scenario("Delete User Scenario")
    .exec(
      http("Delete Api Delete user")
        .delete("/api/users/2")
    )

  setUp(
    getScenario.inject(atOnceUsers(10)),
    postScenario.inject(atOnceUsers(10)),
    putScenario.inject(atOnceUsers(10)),
    deleteScenario.inject(atOnceUsers(10))
  ).protocols(httpProtocol)
}
