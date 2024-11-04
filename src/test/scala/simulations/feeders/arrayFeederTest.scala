package simulations.feeders

import io.gatling.core.Predef.*
import io.gatling.core.feeder.Feeder
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.reflect.internal.NoPhase.{id, name}

class arrayFeederTest extends Simulation {
  val token: String = "Bearer b0dc81605efc0cfcddcf9ea3b511de30983fb76d01e447eba10f09ac24acddcd"
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://gorest.co.in/public/v2")

  // way 1
  val arrayFeeder: Feeder[Any] = array2FeederBuilder(Array(
    Map("id" -> 7484334, "name" -> "Arnesh Panicker"),
    Map("id" -> 7484327, "name" -> "Prof. Sunita Ahluwalia"),
    Map("id" -> 7484326, "name" -> "Mohana Talwar"),
    Map("id" -> 7484325, "name" -> "Mr. Shashi Arora"),
    Map("id" -> 7483662, "name" -> "Aanjaneya Devar")
  )).circular()
  
  // Way 2
 /* val arrayFeeder: Feeder[Any] = Array(
    Map("id" -> 7484334, "name" -> "Arnesh Panicker"),
    Map("id" -> 7484327, "name" -> "Prof. Sunita Ahluwalia"),
    Map("id" -> 7484326, "name" -> "Mohana Talwar"),
    Map("id" -> 7484325, "name" -> "Mr. Shashi Arora"),
    Map("id" -> 7483662, "name" -> "Aanjaneya Devar")
  ).circular()*/
  def getSingleStudentDetail(): ChainBuilder = {
    repeat(3){
      feed(arrayFeeder)
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

   val scn: ScenarioBuilder = scenario("CSV Feeder Test")
    .exec(getSingleStudentDetail())

   setUp(scn.inject(atOnceUsers(1)))
     .protocols(httpProtocol)

}
