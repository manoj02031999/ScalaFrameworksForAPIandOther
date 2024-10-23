package simulations.utils

import io.gatling.core.Predef.*
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.*
trait BaseTest {
  def getSingleUserdata(userId: Int, statusCode: Int): ChainBuilder = {
    exec(
      http("GET API for fetching single user data")
        .get(s"api/users/$userId")
        .check(status.is(statusCode))
    )
  }

  def createUser(requestBodyFileName: String, statusCode: Int): ChainBuilder = {
    exec(
      http("Post Api to Create api")
        .post("/api/users")
        .body(RawFileBody(requestBodyFileName)).asJson 
        .check(status.is(statusCode))
    )
  }

  def updateUser(userId: Int, requestBodyFileName: String, statusCode: Int): ChainBuilder = {
    exec(
      http("Put api update user")
        .put(s"/api/users/$userId")
        .body(RawFileBody(requestBodyFileName)).asJson   
        .check(status.is(statusCode))
    )
  }

  def deleteUser(userId: Int, statusCode: Int): ChainBuilder = {
    exec(
      http("Delete Api Delete user")
        .delete(s"/api/users/$userId")
        .check(status.is(statusCode))
    )
  }

}
