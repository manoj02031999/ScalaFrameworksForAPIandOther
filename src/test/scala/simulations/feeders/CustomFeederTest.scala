package simulations.feeders

import io.gatling.core.Predef._
import io.gatling.core.feeder.Feeder
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.reflect.internal.NoPhase.{id, name}

class CustomFeederTest extends Simulation {
  val token: String = "Bearer b0dc81605efc0cfcddcf9ea3b511de30983fb76d01e447eba10f09ac24acddcd"
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://gorest.co.in/public/v2")

  val idNumbers: Iterator[Int] = (7502382 to 7502392).iterator
  val customFeeder: Iterator[Map[String, Int]] = Iterator.continually(Map("id" -> idNumbers.next()))

  def getSingleStudentDetail(): ChainBuilder = {
    repeat(3){
      feed(customFeeder)
        .exec(
          http(s"get single student details for ${id} of the user name ${name}")
            .get("/users/${id}")
            .header("Authorization",token)
            .check(
              status.is(200),
              jsonPath("$.id").is("${id}"),
            )
        )
    }
  }

   val scn: ScenarioBuilder = scenario("Custom Feeder Test")
    .exec(getSingleStudentDetail())

   setUp(scn.inject(atOnceUsers(1)))
     .protocols(httpProtocol)

}
