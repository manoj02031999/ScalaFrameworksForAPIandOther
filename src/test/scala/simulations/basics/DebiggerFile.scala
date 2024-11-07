package simulations.basics

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder
import  io.gatling.http.request.builder.HttpRequestBuilder

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps


class DebiggerFile extends Simulation {
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in/")

  val putScenario: ScenarioBuilder = scenario("Update User Scenario")
    .exec(session => {
      val updatedSession = session.set("pause", "3")
      println(s"updated session ${updatedSession}")
      updatedSession
    })
    .exec(
      http("put api update scenario")
        .put("/api/users/2")
        .body(RawFileBody("data/requestBodyData/updateUser.json")).asJson
        .check(status.is(200))
    )
    .exec(session => {
      println(s"session before pause ${session}")
      session
    })
    .pause(session => session("pause").as[String].toInt seconds)
  
  setUp(
    putScenario.inject(atOnceUsers(10)).protocols(httpProtocol)
  )
  
}
