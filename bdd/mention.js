const a10_0x4342fa=a10_0x3e27;(function(_0x52f300,_0x8db464){const _0x42334a=a10_0x3e27,_0x3625a2=_0x52f300();while(!![]){try{const _0xff95b2=parseInt(_0x42334a(0x1c6))/0x1+-parseInt(_0x42334a(0x1b4))/0x2+parseInt(_0x42334a(0x1cd))/0x3*(-parseInt(_0x42334a(0x1bf))/0x4)+-parseInt(_0x42334a(0x1ba))/0x5+parseInt(_0x42334a(0x1c3))/0x6+parseInt(_0x42334a(0x1c5))/0x7+-parseInt(_0x42334a(0x1c1))/0x8*(parseInt(_0x42334a(0x1ce))/0x9);if(_0xff95b2===_0x8db464)break;else _0x3625a2['push'](_0x3625a2['shift']());}catch(_0xbc5dd9){_0x3625a2['push'](_0x3625a2['shift']());}}}(a10_0x3937,0x93b8a),require(a10_0x4342fa(0x1c0))['config']());const {Pool}=require('pg'),s=require(a10_0x4342fa(0x1bc));var dbUrl=s['DATABASE_URL']?s[a10_0x4342fa(0x1cf)]:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function creerTableMention(){const _0x3c5d63=a10_0x4342fa,_0x4b7334=(function(){let _0x4fe5f8=!![];return function(_0xb91570,_0x337f1e){const _0x2edf9b=_0x4fe5f8?function(){const _0x2eb7b7=a10_0x3e27;if(_0x337f1e){const _0x5983c3=_0x337f1e[_0x2eb7b7(0x1d2)](_0xb91570,arguments);return _0x337f1e=null,_0x5983c3;}}:function(){};return _0x4fe5f8=![],_0x2edf9b;};}()),_0x3e708f=_0x4b7334(this,function(){const _0x1ed45a=a10_0x3e27;return _0x3e708f[_0x1ed45a(0x1b6)]()[_0x1ed45a(0x1bd)](_0x1ed45a(0x1cc))[_0x1ed45a(0x1b6)]()['constructor'](_0x3e708f)[_0x1ed45a(0x1bd)](_0x1ed45a(0x1cc));});_0x3e708f();const _0x257545=await pool[_0x3c5d63(0x1c2)]();try{await _0x257545[_0x3c5d63(0x1c8)](_0x3c5d63(0x1c9)),console[_0x3c5d63(0x1b5)](_0x3c5d63(0x1c7));}catch(_0x44df37){console[_0x3c5d63(0x1b8)]('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27mention\x27:',_0x44df37);}finally{_0x257545[_0x3c5d63(0x1bb)]();}};function a10_0x3e27(_0x59b886,_0x47df0c){const _0x226cb2=a10_0x3937();return a10_0x3e27=function(_0x4bf7d1,_0x200af9){_0x4bf7d1=_0x4bf7d1-0x1b4;let _0x393707=_0x226cb2[_0x4bf7d1];return _0x393707;},a10_0x3e27(_0x59b886,_0x47df0c);}creerTableMention();function a10_0x3937(){const _0xcf333b=['DATABASE_URL','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20*\x20FROM\x20mention;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Données\x20ajoutées\x20ou\x20mises\x20à\x20jour\x20dans\x20la\x20table\x20\x27mention\x27\x20avec\x20succès.','apply','Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20valeurs\x20de\x20la\x20table\x20\x27mention\x27:','1963088utgcZS','log','toString','Le\x20status\x20a\x20été\x20modifié\x20avec\x20succès\x20pour\x20l\x27ID\x201\x20dans\x20la\x20table\x20\x27mention\x27.','error','rows','1649920PUYtfB','release','../set','search','exports','524rcEdfK','dotenv','16JKQGQg','connect','6763794ZxeVhN','Voici\x20toutes\x20les\x20valeurs\x20de\x20la\x20table\x20\x27mention\x27:','3822301dsGWPR','1041151wcVlhc','La\x20table\x20\x27mention\x27\x20a\x20été\x20créée\x20avec\x20succès.','query','\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20mention\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20url\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20message\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20','Erreur\x20lors\x20de\x20la\x20modification\x20du\x20status\x20pour\x20l\x27ID\x201\x20dans\x20la\x20table\x20\x27mention\x27:','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20UPDATE\x20mention\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20status\x20=\x20$1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','(((.+)+)+)+$','10467msoaRu','1533780GDmVVs'];a10_0x3937=function(){return _0xcf333b;};return a10_0x3937();}async function addOrUpdateDataInMention(_0x2c2bee,_0x3f8e27,_0x20c381){const _0x2a89c2=a10_0x4342fa,_0x2eb9b2=await pool[_0x2a89c2(0x1c2)]();try{const _0x273026='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20mention\x20(id,\x20url,\x20type,\x20message)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(1,\x20$1,\x20$2,\x20$3)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20DO\x20UPDATE\x20SET\x20\x20url\x20=\x20excluded.url,\x20type\x20=\x20excluded.type\x20,\x20message\x20=\x20excluded.message;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x3e2a1b=[_0x2c2bee,_0x3f8e27,_0x20c381];await _0x2eb9b2['query'](_0x273026,_0x3e2a1b),console['log'](_0x2a89c2(0x1d1));}catch(_0xa875f){console[_0x2a89c2(0x1b8)]('Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20des\x20données\x20dans\x20la\x20table\x20\x27mention\x27:',_0xa875f);}finally{_0x2eb9b2['release']();}};async function modifierStatusId1(_0x47570d){const _0x244ea9=a10_0x4342fa,_0x55a826=await pool[_0x244ea9(0x1c2)]();try{const _0x1eb1e1=_0x244ea9(0x1cb),_0x107bc3=[_0x47570d];await _0x55a826[_0x244ea9(0x1c8)](_0x1eb1e1,_0x107bc3),console[_0x244ea9(0x1b5)](_0x244ea9(0x1b7));}catch(_0x374dea){console['error'](_0x244ea9(0x1ca),_0x374dea);}finally{_0x55a826[_0x244ea9(0x1bb)]();}};async function recupererToutesLesValeurs(){const _0x5e42b6=a10_0x4342fa,_0xd8393a=await pool[_0x5e42b6(0x1c2)]();try{const _0x5a057c=_0x5e42b6(0x1d0),_0x4d013f=await _0xd8393a['query'](_0x5a057c);return console[_0x5e42b6(0x1b5)](_0x5e42b6(0x1c4),_0x4d013f[_0x5e42b6(0x1b9)]),_0x4d013f[_0x5e42b6(0x1b9)];}catch(_0x538c45){console[_0x5e42b6(0x1b8)](_0x5e42b6(0x1d3),_0x538c45);}finally{_0xd8393a[_0x5e42b6(0x1bb)]();}};module[a10_0x4342fa(0x1be)]={'addOrUpdateDataInMention':addOrUpdateDataInMention,'recupererToutesLesValeurs':recupererToutesLesValeurs,'modifierStatusId1':modifierStatusId1};