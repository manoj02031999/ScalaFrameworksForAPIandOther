package simulations.feeders

import com.github.javafaker.Faker
import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder



class AdvanceCustomFeederTestWithFaker extends Simulation {
  val token: String = "Bearer b0dc81605efc0cfcddcf9ea3b511de30983fb76d01e447eba10f09ac24acddcd"
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://gorest.co.in/public/v2")

  val faker = new Faker()


  val customFeeder: Iterator[Map[String,_]] = Iterator.continually(Map(
    "name"-> s"${faker.name().fullName()}",
    "email"-> s"${faker.internet().emailAddress()}",
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
