package simulations.advanced

import io.gatling.core.Predef.*
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder
import simulations.utils.BaseTest

class BaseTestImplementationTest extends Simulation with BaseTest{
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in/")


   val scn1: ScenarioBuilder = scenario("scenario 1")
    .exec(getSingleUserdata(2,200))
     .pause(1)
     .exec(getSingleUserdata(3,200))
    .exec(createUser("data/requestBodyData/createUser.json",201))

  val scn2: ScenarioBuilder = scenario("scenario 2")
    .exec(updateUser(2,"data/requestBodyData/updateUser.json",200))
    .exec(updateUser(3,"data/requestBodyData/updateUser.json",200))
    .exec(deleteUser(2,204))

  setUp(
    scn1.inject(atOnceUsers(1)),
    scn2.inject(atOnceUsers(1))
  ).protocols(httpProtocol)
}
