package simulations.apiTest

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder
class GetApiTest extends Simulation {
  // PROTOCOL
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in/")
  // SCENARIO
  val scn: ScenarioBuilder = scenario("Get Single user Scenario")
    .exec(
      http("GET API for fetching single user data")
        .get("api/users/2")
    )

  // SETUP
  setUp(scn.inject(atOnceUsers(10)))
    .protocols(httpProtocol)
}
