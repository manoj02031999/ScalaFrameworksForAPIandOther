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
