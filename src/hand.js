const printHand = (arr, player) => {
  let output = ""
    if (player == "p") {
      output += "Your Hand \n "
      for ( let i = 0; i < arr.length; i++ ) {
        output += arr[i].print() + " \n "
      }
    } else  {
      output += "Dealer's Hand \n "
      output += " 🂾 \n"
      for ( let i = 1; i < arr.length; i++ ) {
        output += arr[i].print() + " \n "
      }
    }
  return output
}

module.exports = {printHand}
