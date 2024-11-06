package simulations.injection

import com.github.javafaker.Faker
import io.gatling.core.Predef.*
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

class ThrorttleTest extends Simulation{
  // PROTOCOL
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in/")
  // SCENARIO
  val scn: ScenarioBuilder = scenario("Get Single user Scenario")
    .exec(
      http("GET API for fetching single user data")
        .get("api/users/2")
    )

  // SETUP
  setUp(scn.inject(
    rampConcurrentUsers(10).to(50).during(20)
  ))
    .throttle(
      reachRps(100).in(10),
      holdFor(5),
      jumpToRps(50),
      holdFor(3)
    )
    .protocols(httpProtocol)
}
