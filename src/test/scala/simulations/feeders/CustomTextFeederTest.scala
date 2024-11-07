package simulations.feeders

import io.gatling.core.Predef._
import io.gatling.core.feeder._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.reflect.internal.NoPhase.{id, name}

class CustomTextFeederTest extends Simulation {
  val token: String = "Bearer b0dc81605efc0cfcddcf9ea3b511de30983fb76d01e447eba10f09ac24acddcd"
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://gorest.co.in/public/v2")

  val customText: BatchableFeederBuilder[String] = separatedValues("data/feeder/studentDetails.txt", '#')

  def getSingleStudentDetail(): ChainBuilder = {
    repeat(3){
      feed(customText)
        .exec(
          http(s"get single student details for ${id} of the user name ${name}")
            .get("/users/${id}")
            .header("Authorization",token)
            .check(
              status.is(200),
              jsonPath("$.id").is("${id}"),
              jsonPath("$.name").is("${name}")
            )
        )
    }
  }

   val scn: ScenarioBuilder = scenario("Custom Text Feeder Test")
    .exec(getSingleStudentDetail())

   setUp(scn.inject(atOnceUsers(1)))
     .protocols(httpProtocol)

}
