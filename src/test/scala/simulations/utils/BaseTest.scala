package simulations.utils

import io.gatling.core.Predef.*
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.*
trait BaseTest {
  def getSingleUserdata(userId: Int, statusCode: Int, needRepeating: Boolean = false, repeaterCount: Int = 0): ChainBuilder = {
    val request = exec(
      http("GET API for fetching single user data")
        .get(s"api/users/$userId")
        .check(status.is(statusCode))
    )

    if(needRepeating){
      repeat(repeaterCount){
        exec(request)
      }
    }else{
      exec(request)
    }
  }

  def createUser(requestBodyFileName: String, statusCode: Int, needRepeating: Boolean = false, repeaterCount: Int = 0): ChainBuilder = {
    val request = exec(
      http("Post Api to Create api")
        .post("/api/users")
        .body(RawFileBody(requestBodyFileName)).asJson
        .check(status.is(statusCode))
    )

    if (needRepeating) {
      repeat(repeaterCount) {
        exec(request)
      }
    } else {
      exec(request)
    }
  }

  def updateUser(userId: Int, requestBodyFileName: String, statusCode: Int, needRepeating: Boolean = false, repeaterCount: Int = 0): ChainBuilder = {
    val request = exec(
      http("Put api update user")
        .put(s"/api/users/$userId")
        .body(RawFileBody(requestBodyFileName)).asJson
        .check(status.is(statusCode))
    )

    if (needRepeating) {
      repeat(repeaterCount) {
        exec(request)
      }
    } else {
      exec(request)
    }
  }

  def deleteUser(userId: Int, statusCode: Int, needRepeating: Boolean = false, repeaterCount: Int = 0): ChainBuilder = {
    val request = exec(
      http("Delete Api Delete user")
        .delete(s"/api/users/$userId")
        .check(status.is(statusCode))
    )

    if (needRepeating) {
      repeat(repeaterCount) {
        exec(request)
      }
    } else {
      exec(request)
    }
  }

}
