var _0x288985=_0x4173;(function(_0x2a7afd,_0xfcd220){var _0x1a0d86=_0x4173,_0x5470e2=_0x2a7afd();while(!![]){try{var _0x47b5bb=parseInt(_0x1a0d86(0xf3))/0x1*(-parseInt(_0x1a0d86(0xe0))/0x2)+parseInt(_0x1a0d86(0xe2))/0x3+parseInt(_0x1a0d86(0xdb))/0x4+parseInt(_0x1a0d86(0xf5))/0x5+-parseInt(_0x1a0d86(0xf0))/0x6*(-parseInt(_0x1a0d86(0xe4))/0x7)+parseInt(_0x1a0d86(0xf4))/0x8*(parseInt(_0x1a0d86(0xef))/0x9)+-parseInt(_0x1a0d86(0xde))/0xa*(parseInt(_0x1a0d86(0xe9))/0xb);if(_0x47b5bb===_0xfcd220)break;else _0x5470e2['push'](_0x5470e2['shift']());}catch(_0x74fd1){_0x5470e2['push'](_0x5470e2['shift']());}}}(_0x13f4,0xac636));var __Text_config={'title':_0x288985(0xf8)},__Id_config={'container':_0x288985(0xed),'modal':_0x288985(0xec),'title':'default-modal-text','submit':'submit-isc','charToEdit':_0x288985(0xee),'form':{'masculino':_0x288985(0xe8),'feminino':'f-isc','nao_binario':_0x288985(0xf1)}};function _0x4173(_0x1596f2,_0x37dc99){var _0x13f4a5=_0x13f4();return _0x4173=function(_0x4173ea,_0x3fd989){_0x4173ea=_0x4173ea-0xdb;var _0x476915=_0x13f4a5[_0x4173ea];return _0x476915;},_0x4173(_0x1596f2,_0x37dc99);}function _0x13f4(){var _0x134509=['1108191RvaTRF','container','1057DIdIja','feminino','innerText','click','m-isc','11GCUXlA','title','substring','modal-isc','container-isc','char-isc','4769298DmdJSF','20004eevsFy','nb-isc','gender','1adPOlO','8KXFNne','3454515gkPfFX','form','charToEdit\x20não\x20está\x20sendo\x20usado\x20ou\x20não\x20foi\x20definido\x20corretamente.','Com\x20qual\x20gênero\x20você\x20se\x20identifica?','checked','none','getItem','display','getElementById','style','778480AYAJPH','submit','log','2245730UcYbef','Digite\x20o\x20pronome\x20que\x20você\x20quer\x20ser\x20chamado\x20(exemplo:\x20a,\x20o,\x20x,\x20*,\x20e)','2715202SmyReX','setItem'];_0x13f4=function(){return _0x134509;};return _0x13f4();}function getById(_0x1743ae){var _0x119749=_0x288985;return document[_0x119749(0xfd)](_0x1743ae);}function register(_0x34b5ac){var _0x55f484=_0x288985;localStorage[_0x55f484(0xe1)](_0x55f484(0xf2),_0x34b5ac);}function gender(){var _0x3d1370=_0x288985;return localStorage['getItem'](_0x3d1370(0xf2))?localStorage[_0x3d1370(0xfb)](_0x3d1370(0xf2)):null;}function setup(){var _0x13ad8a=_0x288985;const _0x25188f=getById(__Id_config[_0x13ad8a(0xea)]);_0x25188f[_0x13ad8a(0xe6)]=__Text_config['title'];const _0x296558=getById(__Id_config['charToEdit']);var _0x5a5fe1=getById(__Id_config['form']['masculino']),_0xed01d7=getById(__Id_config[_0x13ad8a(0xf6)][_0x13ad8a(0xe5)]),_0x1e485d=getById(__Id_config[_0x13ad8a(0xf6)]['nao_binario']);if(gender()=='m')_0x296558['innerText']='o';else{if(gender()=='f')_0x296558['innerText']='a';else{if(gender()=='nb')try{_0x296558[_0x13ad8a(0xe6)]=localStorage['getItem']('p');}catch{console[_0x13ad8a(0xdd)](_0x13ad8a(0xf7));}}}gender()==null?getById(__Id_config[_0x13ad8a(0xdc)])['addEventListener'](_0x13ad8a(0xe7),()=>{var _0x92889=_0x13ad8a;if(gender()!='m'&&gender()!='f'&&gender()!='nb'){if(_0x5a5fe1&&_0xed01d7&&_0x1e485d&&(_0x5a5fe1[_0x92889(0xf9)]||_0xed01d7[_0x92889(0xf9)]||_0x1e485d[_0x92889(0xf9)])){if(_0x5a5fe1[_0x92889(0xf9)])register('m'),_0x296558[_0x92889(0xe6)]='o';else{if(_0xed01d7[_0x92889(0xf9)])register('f'),_0x296558[_0x92889(0xe6)]='a';else{register('nb'),localStorage[_0x92889(0xe1)]('p',prompt(_0x92889(0xdf))[_0x92889(0xeb)](0x0,0x1));try{_0x296558[_0x92889(0xe6)]=localStorage[_0x92889(0xfb)]('p');}catch{console[_0x92889(0xdd)](_0x92889(0xf7));}}}getById(__Id_config[_0x92889(0xe3)])[_0x92889(0xfe)]['display']=_0x92889(0xfa);}}}):getById(__Id_config[_0x13ad8a(0xe3)])[_0x13ad8a(0xfe)][_0x13ad8a(0xfc)]=_0x13ad8a(0xfa);}