package simulations.feeders

import io.gatling.core.Predef.*
import io.gatling.core.feeder.Feeder
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.util.Random
import scala.reflect.internal.NoPhase.{id, name}

class AdvanceCustomFeederTest extends Simulation {
  val token: String = "Bearer b0dc81605efc0cfcddcf9ea3b511de30983fb76d01e447eba10f09ac24acddcd"
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://gorest.co.in/public/v2")

  val random = new Random()

  def randomString(length: Int): String = {
    random.alphanumeric.filter(_.isLetter).take(length).mkString
  }

  val customFeeder: Iterator[Map[String,_]] = Iterator.continually(Map(
    "name"-> s"${randomString(7)}",
    "email"-> s"${randomString(5)}@gmail.com",
    "gender"-> "male",
    "status"-> "inactive"
  ))

  def createSingleStudent(): ChainBuilder = {
    exec(
      http("Post Api to create student")
        .post("/users")
        .header("Authorization",token)
        .header("accept","application/json")
        .header("content-type","application/json")
        .body(StringBody(session =>
          s"""{
            |    "name": "${session("name").as[String]}",
            |    "email": "${session("email").as[String]}",
            |    "gender": "${session("gender").as[String]}",
            |    "status": "${session("status").as[String]}"
            |  }""".stripMargin)).asJson
        .check(
          status.is(201),
          bodyString.saveAs("responseBody")
        )
    )
      .exec{
        session => println(session("responseBody").as[String]); session
      }

  }

  val scn: ScenarioBuilder = scenario("Advanced custom feeder test")
    .feed(customFeeder)
    .exec(createSingleStudent())

  setUp(scn.inject(atOnceUsers(5)))
    .protocols(httpProtocol)

}
