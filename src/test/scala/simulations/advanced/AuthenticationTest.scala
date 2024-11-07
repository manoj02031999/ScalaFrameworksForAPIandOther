package simulations.advanced

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class AuthenticationTest extends Simulation {
  val token: String = "Bearer b0dc81605efc0cfcddcf9ea3b511de30983fb76d01e447eba10f09ac24acddcd"
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://gorest.co.in/public/v2")


  def getAllAllStudentDetails(): ChainBuilder = {
  exec(
      http("get all students details")
        .get("/users")
        .header("Authorization",token)
        .check(
          status.is(200),
          jsonPath("$[0].id").saveAs("studentId"),
          jsonPath("$[0].name").saveAs("studentName")
        )
    )
  }

  def getSingleStudentDetail(): ChainBuilder = {
    exec(
      http("get single student details")
        .get("/users/${studentId}")
        .header("Authorization",token)
        .check(
          status.is(200),
          jsonPath("$.id").is("${studentId}"),
          jsonPath("$.name").is("${studentName}")
        )
    )
  }

   val scn: ScenarioBuilder = scenario("Get all students details")
    .exec(getAllAllStudentDetails())
    .pause(2)
    .exec(getSingleStudentDetail())

   setUp(scn.inject(atOnceUsers(1)))
     .protocols(httpProtocol)

}
