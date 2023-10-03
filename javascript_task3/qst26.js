try {
    const my_string = "1234";
    const reversed_string = my_string.split('').reverse().join('');
    console.log(`Reversed string is : ${reversed_string}`);
  } catch (err) {
    console.log(`Error : ${err.message}`);
  } finally {
    console.log(`Type of my_string is : ${typeof my_string}`);
  }
  