package simulations.apiTest

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class PostApiTest extends Simulation{
  // PROTOCOL
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in/")
  // SCENARIO
   val scn: ScenarioBuilder = scenario("Create User scenario")
    .exec(
      http("Post Api to Create api")
        .post("/api/users")
        .body(RawFileBody("data/requestBodyData/createUser.json")).asJson
    )
 setUp(scn.inject(atOnceUsers(10))).protocols(httpProtocol)
}
