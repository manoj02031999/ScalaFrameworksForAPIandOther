package simulations.injection

import io.gatling.core.Predef.Simulation
import com.github.javafaker.Faker
import io.gatling.core.Predef.*
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

class OpenInjectionWithRampUpUsers extends Simulation{
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
    nothingFor(5),
    atOnceUsers(5),
    rampUsers(10).during(10)
  ))
    .protocols(httpProtocol)
}
