# // You are to submit your finally-finished typewritten essay. However, your
# //  document just got corrupted because of a virus named

# // rUiNINg_YouR_cApiTaLizATioNzZZZ.xYz!
# // TASK
# //  Create a program that capitalizes each word in a string such that the first letter
# //  of each word should be in uppercase while the rest of the letters should be in
# //  lowercase.
# //  EXAMPLE
# //       "hello world" 1 "Hello World"
# //       "kUmuSta mUndO" "Kumusta Mundo"
# //       "one TWO tHRee FOUr" _ "One Two Three Four"

# //  NOTE: No need to worry about numbers, special characters, and more than one
# // whitespace between words.


def CapitalizeEachWord(text):
  # code here
  return text.title()

print(CapitalizeEachWord("one TWO tHRee FOUr"))