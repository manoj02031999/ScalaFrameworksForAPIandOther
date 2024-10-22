package simulations.utils

import io.gatling.core.Predef.*
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder
trait BaseTest {
  def getSingleUserdata(): ChainBuilder = {
    exec(
      http("GET API for fetching single user data")
        .get("api/users/2")
    )
  }

  def createUser(): ChainBuilder = {
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

}
