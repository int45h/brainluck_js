function interpret(str){
  var p = String(str); var o = "";
  var m = new Uint8Array(30000);
  var s = new Uint16Array(16);

  var sp = 0; var mp = 0;

  for(let i = 0; i < p.length; i++){
    switch(p.charAt(i)){
      case '<': mp = (mp-1 >= 0)     ? mp-1 : 29999; break;
      case '>': mp = (mp+1 <= 29999) ? mp+1 : 0;     break;
      case '+': m[mp]++; break;
      case '-': m[mp]--; break;
      case '.': o += String.fromCharCode(m[mp]); break;
      case '[': s[sp] = i; sp++; break;
      case ']': if(m[mp] === 0){s[sp-1] = 0; sp--;}else{i = s[sp-1];} break;
      default:  continue;
    }
  }
  return o;
}

interpret("++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.")
