package simulations.feeders

import io.gatling.core.Predef.*
import io.gatling.core.feeder.Feeder
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.reflect.internal.NoPhase.{id, name}

class JsonFeederTest extends Simulation {
  val token: String = "Bearer b0dc81605efc0cfcddcf9ea3b511de30983fb76d01e447eba10f09ac24acddcd"
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://gorest.co.in/public/v2")

  val jsonFeeder: Feeder[Any] = jsonFile("data/feeder/studentDetails.json").circular()

  def getSingleStudentDetail(): ChainBuilder = {
    repeat(3){
      feed(jsonFeeder)
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

   val scn: ScenarioBuilder = scenario("json Feeder Test")
    .exec(getSingleStudentDetail())

   setUp(scn.inject(atOnceUsers(1)))
     .protocols(httpProtocol)

}
