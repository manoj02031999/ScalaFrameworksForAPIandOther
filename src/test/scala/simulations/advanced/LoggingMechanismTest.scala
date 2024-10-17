package simulations.advanced

import io.gatling.core.Predef.*
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

class LoggingMechanismTest extends Simulation {
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in")

  val getAllUserScenario: ScenarioBuilder = scenario("Get Single user Scenario")
    .exec(
      http("GET API for fetching single user data")
        .get("/api/users?page=2")
        .check(status is 200,
        jsonPath("$.data[1].id").saveAs("userId"),
        jsonPath("$.data[1].first_name").saveAs("firstName"),
        jsonPath("$.data[1].last_name").saveAs("lastName"),
          // SAVE THE ENTIRE BODY RESPONSE
          bodyString.saveAs("responseBody")
        )
    )

    /*.exec{
      session => println(session("responseBody").as[String]) // Manual Logging
        session
    }*/
    /*.pause(2)
    .exec{ session => println(session)
      session
    }*/

  setUp(
    getAllUserScenario.inject(atOnceUsers(10))
  ).protocols(httpProtocol)
}
