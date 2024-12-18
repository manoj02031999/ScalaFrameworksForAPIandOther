package simulations.injection

import com.github.javafaker.Faker
import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class OpenInjectionWithRampUpUsersPerSecond extends Simulation{
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
  // rampUsersPerSec(5).to(10).during(15)
    rampUsersPerSec(5).to(10).during(15).randomized
  ))
    .protocols(httpProtocol)
}
