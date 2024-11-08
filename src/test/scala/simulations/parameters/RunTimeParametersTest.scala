package simulations.parameters

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class RunTimeParametersTest extends Simulation{
  // PROTOCOL
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in/")

  def userMin: Int = System.getProperty("userMin","10").toInt
  def userMax: Int = System.getProperty("userMax","20").toInt
  def duration: Int = System.getProperty("duration","20").toInt

  before{
    println(s"User count minimum = $userMin")
    println(s"User count maximum = $userMax")
    println(s"Duration = $duration")
  }
  // SCENARIO
  val scn: ScenarioBuilder = scenario("Get Single user Scenario")
    .exec(
      http("GET API for fetching single user data")
        .get("api/users/2")
    )

  // SETUP
  setUp(scn.inject(
    // constantConcurrentUsers(50).during(10)
    rampConcurrentUsers(userMin).to(userMax).during(duration)
  ))
    .protocols(httpProtocol)
}

/*To Run the Script using parameters
  mvn gatling:test -D"gatling.simulationClass=simulations.parameters.RunTimeParametersTest" -D"userMin=5" -D"userMax=15" -D"duration=10"
*/