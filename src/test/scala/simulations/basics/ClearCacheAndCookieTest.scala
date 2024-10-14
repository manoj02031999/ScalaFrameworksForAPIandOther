package simulations.basics

import io.gatling.core.Predef.*
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

class ClearCacheAndCookieTest extends Simulation {
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in")

  val getAllUserScenario: ScenarioBuilder = scenario("Get Single user Scenario")
    .exec(flushHttpCache)
    .exec(flushCookieJar)
    .exec(
      http("GET API for fetching single user data")
        .get("/api/users?page=2")
        .check(status is 200,
        jsonPath("$.data[1].id").saveAs("userId"),
        jsonPath("$.data[1].first_name").saveAs("firstName"),
        jsonPath("$.data[1].last_name").saveAs("lastName"),
        )
    )
    .pause(2)
    .exec{ session =>
      if(session.contains("userId")){
        println("User ID: " + session("userId").as[String])
        println("First Name : " + session("firstName").as[String])
        println("Last Name : " + session("lastName").as[String])
        val url = s"/api/users/${session("userId").as[String]}"
        println(s"URL : $url")
      }else{
        println("User ID not found")
      }
      session
    }

    .exec(flushHttpCache)
    .exec(flushCookieJar)
    .exec{ session =>
      if(session.contains("userId")){
        println("User ID ::::" + session("userId").as[String])
      }else {
        println("User ID not found")
      }
      session
    }

    .exec(
      http("GET API for fetching single user data")
        .get(session => s"/api/users/${session("userId").as[String]}")
        .check(status is 200,
          jsonPath("$.data.id").is(session => session("userId").as[String]),
          jsonPath("$.data.first_name").is(session => session("firstName").as[String]),
          jsonPath("$.data.last_name").is(session => session("lastName").as[String])
        )
    )


  setUp(
    getAllUserScenario.inject(atOnceUsers(10))
  ).protocols(httpProtocol)
}
