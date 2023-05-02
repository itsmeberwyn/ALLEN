def aplusb(A,B):
  dp = [[0 for _ in range(A+B+1)] for _ in range(A+1)]
  for i in range(A+1):
      dp[i][0] = 1
  for i in range(1, A+1):
      for j in range(1, A+B+1):
          if j < i:
              dp[i][j] = dp[i-1][j]
          else:
              dp[i][j] = dp[i-1][j] + dp[i][j-i]
  return dp[A][A+B]