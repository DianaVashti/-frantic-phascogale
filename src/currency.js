const formatAsMoney = dollars => {
  if( typeof dollars !== 'number' ) {
    throw new Error( `Expected ${JSON.stringify(dollars)} to be a number` )
  }
  return `$${dollars.toFixed( 2 )}`
}

export default formatAsMoney
