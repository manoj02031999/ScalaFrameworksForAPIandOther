package simulations.utils

import io.gatling.core.Predef.*
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.*
import io.gatling.http.request.builder.HttpRequestBuilder
trait BaseTest {
  def getSingleUserdata(userId: Int, statusCode: Int, needRepeating: Boolean = false, repeaterCount: Int = 0): ChainBuilder = {
    val request = http("GET API for fetching single user data")
        .get(s"api/users/$userId")
        .check(status.is(statusCode))
    buildRequest(request,needRepeating, repeaterCount)
  }

  def createUser(requestBodyFileName: String, statusCode: Int, needRepeating: Boolean = false, repeaterCount: Int = 0): ChainBuilder = {
    val request = http("Post Api to Create api")
        .post("/api/users")
        .body(RawFileBody(requestBodyFileName)).asJson
        .check(status.is(statusCode))
    buildRequest(request,needRepeating, repeaterCount)
  }

  def updateUser(userId: Int, requestBodyFileName: String, statusCode: Int, needRepeating: Boolean = false, repeaterCount: Int = 0): ChainBuilder = {
    val request = http("Put api update user")
        .put(s"/api/users/$userId")
        .body(RawFileBody(requestBodyFileName)).asJson
        .check(status.is(statusCode))
        buildRequest(request, needRepeating, repeaterCount)
  }

  def deleteUser(userId: Int, statusCode: Int, needRepeating: Boolean = false, repeaterCount: Int = 0): ChainBuilder = {
    val request = http("Delete Api Delete user")
        .delete(s"/api/users/$userId")
        .check(status.is(statusCode))
    buildRequest(request,needRepeating, repeaterCount)
  }

  private  def buildRequest(request: HttpRequestBuilder,needRepeating: Boolean = false, repeaterCount: Int = 0): ChainBuilder={
    if (needRepeating) {
      repeat(repeaterCount,"repeaterIndex") {
        exec(request)
      }
    } else {
      exec(request)
    }
  }
}
