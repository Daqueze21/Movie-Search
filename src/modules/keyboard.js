// export function getKeyboard() {
//   const keyboardKeys = {
//     row1: [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
//     row2: [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220],
//     row3: [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
//     row4: [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16],
//     row5: [17, 91, 18, 32, 18, 93, 17, 37, 38, 40, 39],
//   };

//   const specBtnId = [
//     'backspace',
//     'tab',
//     'caps',
//     'enter',
//     'shift',
//     'control',
//     'win',
//     'alt',
//     'spacebar',
//     'menu',
//     'arrowUp',
//     'arrowUp',
//     'arrowDown',
//     'arrowRight',
//   ];

//   const specBtnNumb = [
//     '8',
//     '9',
//     '20',
//     '13',
//     '16',
//     '17',
//     '91',
//     '18',
//     '32',
//     '93',
//     '37',
//     '38',
//     '40',
//     '39',
//   ];

//   const engKeys = [
//     '`',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '0',
//     '-',
//     '=',
//     'Backspace',
//     'Tab',
//     'q',
//     'w',
//     'e',
//     'r',
//     't',
//     'y',
//     'u',
//     'i',
//     'o',
//     'p',
//     '[',
//     ']',
//     '\\',
//     'Caps Lock',
//     'a',
//     's',
//     'd',
//     'f',
//     'g',
//     'h',
//     'j',
//     'k',
//     'l',
//     ';',
//     "'",
//     'Enter',
//     'Shift',
//     'z',
//     'x',
//     'c',
//     'v',
//     'b',
//     'n',
//     'm',
//     ',',
//     '.',
//     '/',
//     'Shift',
//     'Ctrl',
//     'Win',
//     'Alt',
//     '',
//     'Alt',
//     'Menu',
//     'Ctrl',
//     '←',
//     '↑',
//     '↓',
//     '→',
//   ];

//   const engKeysCaps = [
//     '`',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '0',
//     '-',
//     '=',
//     'Backspace',
//     'Tab',
//     'Q',
//     'W',
//     'E',
//     'R',
//     'T',
//     'Y',
//     'U',
//     'I',
//     'O',
//     'P',
//     '[',
//     ']',
//     '\\',
//     'Caps Lock',
//     'A',
//     'S',
//     'D',
//     'F',
//     'G',
//     'H',
//     'J',
//     'K',
//     'L',
//     ';',
//     "'",
//     'Enter',
//     'Shift',
//     'Z',
//     'X',
//     'C',
//     'V',
//     'B',
//     'N',
//     'M',
//     ',',
//     '.',
//     '/',
//     'Shift',
//     'Ctrl',
//     'Win',
//     'Alt',
//     '',
//     'Alt',
//     'Menu',
//     'Ctrl',
//     '←',
//     '↑',
//     '↓',
//     '→',
//   ];

//   const engKeysShift = [
//     '~',
//     '!',
//     '@',
//     '#',
//     '$',
//     '%',
//     '^',
//     '&',
//     '*',
//     '(',
//     ')',
//     '_',
//     '+',
//     'Backspace',
//     'Tab',
//     'Q',
//     'W',
//     'E',
//     'R',
//     'T',
//     'Y',
//     'U',
//     'I',
//     'O',
//     'P',
//     '{',
//     '}',
//     '|',
//     'Caps Lock',
//     'A',
//     'S',
//     'D',
//     'F',
//     'G',
//     'H',
//     'J',
//     'K',
//     'L',
//     ':',
//     '"',
//     'Enter',
//     'Shift',
//     'Z',
//     'X',
//     'C',
//     'V',
//     'B',
//     'N',
//     'M',
//     '<',
//     '>',
//     '?',
//     'Shift',
//     'Ctrl',
//     'Win',
//     'Alt',
//     '',
//     'Alt',
//     'Menu',
//     'Ctrl',
//     '←',
//     '↑',
//     '↓',
//     '→',
//   ];

//   const rusKeys = [
//     'ё',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '0',
//     '-',
//     '=',
//     'Backspace',
//     'Tab',
//     'й',
//     'ц',
//     'у',
//     'к',
//     'е',
//     'н',
//     'г',
//     'ш',
//     'щ',
//     'з',
//     'х',
//     'ъ',
//     '\\',
//     'Caps Lock',
//     'ф',
//     'ы',
//     'в',
//     'а',
//     'п',
//     'р',
//     'о',
//     'л',
//     'д',
//     'ж',
//     'э',
//     'Enter',
//     'Shift',
//     'я',
//     'ч',
//     'с',
//     'м',
//     'и',
//     'т',
//     'ь',
//     'б',
//     'ю',
//     '.',
//     'Shift',
//     'Ctrl',
//     'Win',
//     'Alt',
//     '',
//     'Alt',
//     'Menu',
//     'Ctrl',
//     '←',
//     '↑',
//     '↓',
//     '→',
//   ];

//   const rusKeysCaps = [
//     'Ё',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '0',
//     '-',
//     '=',
//     'Backspace',
//     'Tab',
//     'Й',
//     'Ц',
//     'У',
//     'К',
//     'Е',
//     'Н',
//     'Г',
//     'Ш',
//     'Щ',
//     'З',
//     'Х',
//     'Ъ',
//     '\\',
//     'Caps Lock',
//     'Ф',
//     'Ы',
//     'В',
//     'А',
//     'П',
//     'Р',
//     'О',
//     'Л',
//     'Д',
//     'Ж',
//     'Э',
//     'Enter',
//     'Shift',
//     'Я',
//     'Ч',
//     'С',
//     'М',
//     'И',
//     'Т',
//     'Ь',
//     'Б',
//     'Ю',
//     '.',
//     'Shift',
//     'Ctrl',
//     'Win',
//     'Alt',
//     '',
//     'Alt',
//     'Menu',
//     'Ctrl',
//     '←',
//     '↑',
//     '↓',
//     '→',
//   ];

//   const rusKeysShift = [
//     'Ё',
//     '!',
//     '"',
//     '№',
//     ';',
//     '%',
//     ':',
//     '?',
//     '*',
//     '(',
//     ')',
//     '_',
//     '+',
//     'Backspace',
//     'Tab',
//     'Й',
//     'Ц',
//     'У',
//     'К',
//     'Е',
//     'Н',
//     'Г',
//     'Ш',
//     'Щ',
//     'З',
//     'Х',
//     'Ъ',
//     '/',
//     'Caps Lock',
//     'Ф',
//     'Ы',
//     'В',
//     'А',
//     'П',
//     'Р',
//     'О',
//     'Л',
//     'Д',
//     'Ж',
//     'Э',
//     'Enter',
//     'Shift',
//     'Я',
//     'Ч',
//     'С',
//     'М',
//     'И',
//     'Т',
//     'Ь',
//     'Б',
//     'Ю',
//     ',',
//     'Shift',
//     'Ctrl',
//     'Win',
//     'Alt',
//     '',
//     'Alt',
//     'Menu',
//     'Ctrl',
//     '←',
//     '↑',
//     '↓',
//     '→',
//   ];

//   // init project
  
//   let text = '';

//   // change symbols on keyboard
//   function changeKeyboardSymbols(lettersArray) {
//     const buttons = document.querySelectorAll('.keyboard__btn');

//     buttons.forEach((el, val) => {
//       el.textContent = lettersArray[val];
//     });
//   }

//   // add buttons
//   function buttonsCreation() {
//     for (const key of Object.keys(keyboardKeys)) {
//       const row = document.createElement('div');
//       row.setAttribute('class', 'keyboard__row');
//       row.setAttribute('id', `${key}`);
//       keyboard.append(row);

//       for (let i = 0; i < keyboardKeys[key].length; i++) {
//         const btn = document.createElement('div');
//         btn.setAttribute('class', `keyboard__btn c${keyboardKeys[key][i]}`);
//         btn.setAttribute('code', keyboardKeys[key][i]);
//         row.append(btn);
//       }
//       changeKeyboardSymbols(rusKeys);
//     }
//   }

//   buttonsCreation();

//   // add spec buttons id
//   function addSpecBtnId() {
//     specBtnNumb.forEach((el, val) => {
//       const domElem = document.querySelectorAll(`.c${el}`);

//       domElem[0].setAttribute('id', specBtnId[val]);
//       if (domElem.length > 1) {
//         domElem[0].setAttribute('id', `${specBtnId[val]}left`);
//         domElem[1].setAttribute('id', `${specBtnId[val]}right`);
//       } else {
//         domElem[0].setAttribute('id', specBtnId[val]);
//       }
//     });
//   }

//   addSpecBtnId();

//   function CapsLock() {
//     if (
//       localStorage.capslock == null ||
//       (localStorage.capslock == 'false' && localStorage.isEng == 'false') ||
//       localStorage.isEng == null
//     ) {
//       localStorage.setItem('capslock', true);
//       changeKeyboardSymbols(rusKeysCaps);
//     } else if (
//       localStorage.capslock == null ||
//       (localStorage.capslock == 'false' && localStorage.isEng == 'true')
//     ) {
//       localStorage.setItem('capslock', true);
//       changeKeyboardSymbols(engKeysCaps);
//     } else if (
//       localStorage.capslock == 'true' &&
//       localStorage.isEng == 'false'
//     ) {
//       localStorage.setItem('capslock', false);
//       changeKeyboardSymbols(rusKeys);
//     } else if (
//       localStorage.capslock === 'true' &&
//       localStorage.isEng === 'true'
//     ) {
//       localStorage.setItem('capslock', false);
//       changeKeyboardSymbols(engKeys);
//     }
//   }

//   function Shift() {
//     if (
//       localStorage.capslock === null ||
//       (localStorage.capslock === 'false' && localStorage.isEng == 'false')
//     ) {
//       changeKeyboardSymbols(rusKeysShift);
//     } else if (
//       localStorage.capslock === 'true' &&
//       localStorage.isEng === 'false'
//     ) {
//       changeKeyboardSymbols(rusKeys);
//     } else if (
//       localStorage.capslock === 'false' &&
//       localStorage.isEng === 'true'
//     ) {
//       changeKeyboardSymbols(engKeysShift);
//     } else if (
//       localStorage.capslock === 'true' &&
//       localStorage.isEng === 'true'
//     ) {
//       changeKeyboardSymbols(engKeys);
//     }
//   }

//   function keydown(event) {
//     if (
//       event.code === 'ControlRight' ||
//       event.code === 'AltRight' ||
//       event.code === 'ShiftRight'
//     ) {
//       document
//         .querySelector(`#${event.code.toLowerCase()}`)
//         .classList.add('keydown');
//     } else {
//       document.querySelector(`.c${event.keyCode}`).classList.add('keydown');
//     }

//     // text output
//     let element = document.querySelectorAll(`div[code="${event.keyCode}"]`);

//     if (element.length == 1) {
//       element = element[0];
//       if (element.innerText == 'Backspace') {
//         text = text.substr(0, text.length - 1);
//       } else if (element.innerText == 'Enter') {
//         text += '\n';
//       } else if (element.innerText == '') {
//         text += ' ';
//       } else if (element.innerText == 'Tab') {
//         text += '   ';
//       } else if (element.innerText == 'Caps Lock') {
//         text += '';
//       } else if (
//         element.key != 'Control' ||
//         element.key != 'Shift' ||
//         element.key != 'Alt' ||
//         element.key != 'ContextMenu' ||
//         element.key != 'Meta'
//       ) {
//         text += element.innerText;
//       }
//       document.querySelector('#textarea').value = text;
//     }

//     // change lang
//     if (
//       event.code == 'ControlLeft' &&
//       localStorage.isEng == 'false' &&
//       localStorage.capslock == 'false'
//     ) {
//       localStorage.setItem('isEng', true);
//       changeKeyboardSymbols(engKeys);
//     } else if (
//       event.code == 'ControlLeft' &&
//       localStorage.isEng == 'false' &&
//       localStorage.capslock == 'true'
//     ) {
//       localStorage.setItem('isEng', true);
//       changeKeyboardSymbols(engKeysCaps);
//     } else if (
//       event.code == 'ControlLeft' &&
//       localStorage.isEng == 'true' &&
//       localStorage.capslock == 'false'
//     ) {
//       localStorage.setItem('isEng', false);
//       changeKeyboardSymbols(rusKeys);
//     } else if (
//       event.code == 'ControlLeft' &&
//       localStorage.isEng == 'true' &&
//       localStorage.capslock == 'true'
//     ) {
//       localStorage.setItem('isEng', false);
//       changeKeyboardSymbols(rusKeysCaps);
//     }

//     // uppercase on shift
//     if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
//       Shift();
//     }

//     event.preventDefault();
//   }

//   function keyup(event) {
//     if (
//       event.code == 'AltRight' ||
//       event.code == 'ControlRight' ||
//       event.code == 'ShiftRight'
//     ) {
//       document
//         .querySelector(`#${event.code.toLowerCase()}`)
//         .classList.remove('keydown');
//     } else {
//       document.querySelector(`.c${event.keyCode}`).classList.remove('keydown');
//     }

//     // capslock func
//     if (event.code === 'CapsLock') {
//       CapsLock();
//     }

//     // shift rules
//     if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
//       if (localStorage.capslock === 'false' && localStorage.isEng === 'false') {
//         changeKeyboardSymbols(rusKeys);
//       } else if (
//         localStorage.capslock === 'true' &&
//         localStorage.isEng === 'false'
//       ) {
//         changeKeyboardSymbols(rusKeysCaps);
//       } else if (
//         localStorage.capslock === 'false' &&
//         localStorage.isEng === 'true'
//       ) {
//         changeKeyboardSymbols(engKeys);
//       } else if (
//         localStorage.capslock === 'true' &&
//         localStorage.isEng === 'true'
//       ) {
//         changeKeyboardSymbols(engKeysCaps);
//       }
//     }
//   }

//   // events
//   // keydown
//   document.addEventListener('keydown', keydown);

//   // keyup
//   document.addEventListener('keyup', keyup);

//   // mouse click event
//   document.querySelectorAll('.keyboard__btn').forEach((e) => {
//     e.addEventListener('mousedown', (event) => {
//       // shift rules
//       if (event.target.innerHTML === 'Shift') {
//         Shift();
//       }
//     });

//     e.addEventListener('mouseup', (event) => {
//       let element = document.querySelectorAll(
//         `div[code="${event.target.getAttribute('code')}"]`
//       );

//       // rules for spec buttons
//       if (element.length == 1) {
//         element = element[0];
//         if (element.innerText == 'Backspace') {
//           text = text.substr(0, text.length - 1);
//         } else if (element.innerText === 'Enter') {
//           text += '\n';
//         } else if (element.innerText === '') {
//           text += ' ';
//         } else if (element.innerText === 'Tab') {
//           text += '   ';
//         } else if (element.innerText === 'Caps Lock') {
//           text += '';
//         } else if (
//           element.key != 'Control' ||
//           element.key != 'Shift' ||
//           element.key != 'Alt' ||
//           element.key != 'ContextMenu'
//         ) {
//           text += element.innerText;
//         }
//         document.querySelector('#textarea').value = text;
//       }

//       if (element.innerText === 'Caps Lock') {
//         CapsLock();
//       }

//       // shift rules
//       if (event.target.innerHTML === 'Shift') {
//         if (
//           localStorage.capslock === 'false' &&
//           localStorage.isEng === 'false'
//         ) {
//           console.log('first');
//           changeKeyboardSymbols(rusKeys);
//         } else if (
//           localStorage.capslock === 'true' &&
//           localStorage.isEng === 'false'
//         ) {
//           changeKeyboardSymbols(rusKeysCaps);
//         } else if (
//           localStorage.capslock === 'false' &&
//           localStorage.isEng === 'true'
//         ) {
//           changeKeyboardSymbols(engKeys);
//         } else if (
//           localStorage.capslock === 'true' &&
//           localStorage.isEng === 'true'
//         ) {
//           changeKeyboardSymbols(engKeysCaps);
//         }
//       }

//       // change lang
//       if (
//         event.target.innerHTML === 'Ctrl' &&
//         localStorage.isEng == 'false' &&
//         localStorage.capslock == 'false'
//       ) {
//         localStorage.setItem('isEng', true);
//         changeKeyboardSymbols(engKeys);
//       } else if (
//         event.target.innerHTML === 'Ctrl' &&
//         localStorage.isEng == 'false' &&
//         localStorage.capslock == 'true'
//       ) {
//         localStorage.setItem('isEng', true);
//         changeKeyboardSymbols(engKeysCaps);
//       } else if (
//         event.target.innerHTML === 'Ctrl' &&
//         localStorage.isEng == 'true' &&
//         localStorage.capslock == 'false'
//       ) {
//         localStorage.setItem('isEng', false);
//         changeKeyboardSymbols(rusKeys);
//       } else if (
//         event.target.innerHTML === 'Ctrl' &&
//         localStorage.isEng == 'true' &&
//         localStorage.capslock == 'true'
//       ) {
//         localStorage.setItem('isEng', false);
//         changeKeyboardSymbols(rusKeysCaps);
//       }
//     });
//   });

//   window.addEventListener('beforeunload', () => {
//     localStorage.setItem('isEng', false);
//     localStorage.setItem('capslock', false);
//   });
// };
// // console.log('one')