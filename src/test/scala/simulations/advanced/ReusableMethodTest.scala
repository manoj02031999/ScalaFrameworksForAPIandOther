package simulations.advanced

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class ReusableMethodTest extends Simulation {
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in/")

  def getSingleUserdata(): ChainBuilder = {
    exec(
      http("GET API for fetching single user data")
        .get("api/users/2")
    )
  }

  def createUser(): ChainBuilder= {
    exec(
      http("Post Api to Create api")
        .post("/api/users")
        .body(RawFileBody("data/requestBodyData/createUser.json")).asJson
    )
  }

  def updateUser(): ChainBuilder = {
    exec(
      http("Put api update user")
        .put("/api/users/2")
        .body(RawFileBody("data/requestBodyData/updateUser.json")).asJson
    )
  }

  def deleteUser(): ChainBuilder = {
    exec(
      http("Delete Api Delete user")
        .delete("/api/users/2")
    )
  }

   val scn1: ScenarioBuilder = scenario("scenario 1")
    .exec(getSingleUserdata())
    .exec(createUser())

  val scn2: ScenarioBuilder = scenario("scenario 2")
    .exec(getSingleUserdata())
    .exec(updateUser())
    .exec(deleteUser())

  setUp(
    scn1.inject(atOnceUsers(1)),
    scn2.inject(atOnceUsers(1))
  ).protocols(httpProtocol)
}
