(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/overwatchVideo.e7b227af.mp4"},,,function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(9),o=t.n(r),s=(t(16),t(1)),l=t(2),c=t(5),h=t(3),d=t(4),m=(t(17),t(18),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"media"},i.a.createElement("h1",null,"Media"),i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("a",{class:"twitter-timeline","data-height":"400","data-dnt":"true","data-theme":"light","data-link-color":"#2B7BB9",href:"https://twitter.com/Third_EyeEsport?ref_src=twsrc%5Etfw"},"Tweets by Third_EyeEsport")," ",i.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})),i.a.createElement("div",null,i.a.createElement("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/8WVPtPtDzz0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:"Clarity"}))))}}]),a}(n.Component)),u=(t(19),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.teamData;return i.a.createElement("div",{className:"roster"},i.a.createElement("div",null,i.a.createElement("h2",null,e.teamName),i.a.createElement("div",{className:"container"},e.players.sort(function(e,a){return e.playerName<a.playerName?-1:e.playerName>a.playerName?1:0}).map(function(e){return i.a.createElement("div",{className:"players"},i.a.createElement("img",{src:"".concat(e.imgurl),alt:e.playerName}),i.a.createElement("div",{className:"players-overlay"},i.a.createElement("h1",null,e.playerName),i.a.createElement("p",null,e.playerWiki)))}))))}}]),a}(n.Component)),p=t(6),g=t(7),f=t.n(g),y=(t(20),t(21),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{class:"header header-fixed"},i.a.createElement("div",{class:"navbar container"},i.a.createElement("div",{class:"logo"},i.a.createElement("a",{href:"#home"},"Golden Lions")),i.a.createElement("label",{for:"navbar-toggle"},i.a.createElement("i",null)),i.a.createElement("nav",{class:"menu"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#portfolio"},"Roster")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contacts"},"Social Media"))))))}}]),a}(i.a.Component)),b=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(h.a)(a).call(this,e))).state={isVideoVisible:!1},t.toggleVideoVisibility=t.toggleVideoVisibility.bind(Object(p.a)(Object(p.a)(t))),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"toggleVideoVisibility",value:function(){var e=this.state.isVideoVisible;this.setState({isVideoVisible:!e})}},{key:"render",value:function(){var e=this.state.isVideoVisible;return i.a.createElement("header",null,i.a.createElement(y,null),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("video",{poster:f.a,preload:"true",autoPlay:!0,muted:!0,loop:"loop"},i.a.createElement("source",{src:f.a,type:"video/webm"}),i.a.createElement("source",{src:f.a,type:"video/mp4"})))),e&&this.renderVideoModal(),i.a.createElement("div",null,i.a.createElement("h1",null,"The Love")))}}]),a}(n.PureComponent),w={teamName:"The Golden Lions",players:[{playerName:"Brigitte",imgurl:"./images/Icon-Brigitte.png",playerWiki:"Brigitte is the youngest daughter of Torbj\xf6rn and Ingrid Lindholm, and is a traveling companion \n      of Reinhardt Wilhelm. No longer sitting on the sidelines, Brigitte Lindholm has taken up arms to defend those \n      in need of protection. She is very stubborn, a trait inherited from her father. Brigitte spars with Reinhardt \n      every day. Afterwards, she and Reinhardt go to a pub or tavern to relax. She likes doughnuts, and loves semlor"},{playerName:"Mercy",imgurl:"./images/Icon-Mercy.png",playerWiki:"A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a \n        brilliant scientist, and a staunch advocate for peace. She is one of the most gifted doctors in the world when\n         it comes to medical technology, and has applied such technology to her own body; effects have possibly included \n         slowing/halting her ageing process. She likes Swiss chocolate."},{playerName:"Reinhardt",imgurl:"./images/Icon-Reinhardt.png",playerWiki:'Reinhardt Wilhelm styles himself as a champion of a bygone age, who lives by the knightly codes \n        of valor, justice, and courage. Possessing an "active imagination," he enjoys eating currywurst, and is a fan \n        of David Hasselhoff\'s music. He spars with Brigitte every day, after which they go to a pub or tavern to relax.'},{playerName:"Bastion",imgurl:"./images/Icon-Bastion.png",playerWiki:"Once a frontline combatant in the devastating Omnic Crisis, Bastion has all but lost its combat \n        programming and now explores its surroundings, fascinated by the world and its inhabitants. Though Bastion's new \n        nature is gentle, its core combat programming takes over when the unit senses danger, utilizing its entire arsenal \n        to eliminate anything it perceives as a threat. This has led to instances of conflict with the few humans it has \n        encountered, and it tries to avoid populated areas in favor of the wild, uncharted regions of the world."},{playerName:"Baptiste",imgurl:"./images/Baptiste_portrait.png",playerWiki:"An elite combat medic and ex-Talon operative, Baptiste now uses his skills to help those whose \n        lives have been impacted by war. He possesses an innate desire to help people. In correspondence obtained \n        by Trung Le Nguyen, Cuerva noted that Baptiste is a skilled marksman despite being a medic, and boasted \n        unusually high endurance, versatility, and even luck. Baptiste loves to eat\u2014it's been suggested that his \n        favorite dish is pork griot and lalo. Not many people know that he has a sweet tooth, and he loves to kick \n        back with a tall drink with a lot of ice. He is fluent in Haitian Creole, French, and English. His equipment \n        is a collection of armor and weaponry acquired over the years. Some are from the black market, and some are \n        modified from his Caribbean Coalition and Talon gear; Baptiste has always been resourceful. Baptiste is an only child, but has several cousins."},{playerName:"D.Va",imgurl:"./images/Icon-D.Va.png",playerWiki:"D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in \n        defense of her homeland. She is a very competitive individual, and coupled with her pro-gamer skills, this \n        makes her an extremely effective mech pilot. Never backing down, D.Va always plays to win. While she projects a \n        carefree, irreverant attitude, D.Va is burdened by the emotional cost of defending her homeland, and the facade the \n        South Korean media projects on her. In addition to skills as a mech pilot, D.Va is also a competent mechanic."},{playerName:"Ana",imgurl:"./images/Icon-Ana.png",playerWiki:'One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home \n        and the people she cares for. Hailing from a long line of decorated soldiers, Ana inspired confidence and \n        loyalty in her colleagues and endowed her daughter, Fareeha Amari \u2014 Pharah, with an intense sense of duty and \n        honor. Like her daughter, she bore a tattoo of an Eye of Horus as a symbol of protection. Likewise, her callsign \n        in the Egyptian Military during the Omnic Crisis was "Horus."'},{playerName:"L\xfacio",imgurl:"./images/Icon-L\xfacio.png",playerWiki:'L\xfacio is an international celebrity who inspires social change through his music and actions. \n        He has a positive, up-beat attitude, and is always looking towards the future. L\xfacio wears hard-light skates \n        that project hard-light "blades," allowing him to traverse any surface.'},{playerName:"Orisa",imgurl:"./images/Icon-Orisa.png",playerWiki:"Orisa is a newly-created omnic with both a heart and personality. Urged to become a hero by \n        her creator, Efi Oladele, Orisa strives to right wrongs and act as the hero the world needs. While her \n        relative inexperience can make her an occasional liability, Efi's optimism and willingness to make \n        modifications to Orisa's adaptive artificial intelligence have always been able to set things right. While \n        Orisa has much to learn about the world and its functionality, Orisa stands ready to protect both Efi and \n        Numbani with her growing sense of honor and duty. She is a fan of L\xfacio's music. She does not dream in the \n        manner that humans do."},{playerName:"Tracer",imgurl:"./images/Icon-Tracer.png",playerWiki:"The former Overwatch agent known as Tracer is a time-jumping adventurer and an irrepressible \n        force for good. She hails from London, and has traveled all over the world.She was a great admirer of \n        Tekhartha Mondatta, and was inspired by Mei, an Overwatch scientist. She believes that sometimes, one simply \n        has to do what is right, even if it's outside the law."},{playerName:"Moira",imgurl:"./images/Icon-Moira.png",playerWiki:"\n        Equal parts brilliant and controversial, scientist Moira O'Deorain is on the cutting edge of genetic \n        engineering, searching for a way to rewrite the fundamental building blocks of life. Though O'Deorain will go \n        to any lengths to make scientific breakthroughs, her work is still unknown to most of the world. But now that \n        she has been freed from all constraints, it is only a matter of time before everything changes. O'Deorain has a \n        negative view of Overwatch, claiming that it was responsible for stifling scientific advancement for decades. \n        She has no interest in global conquest, but is willing to work with those who might have such a goal. \n        Her intellectual pursuits are driven by her interest in humanity. She is a geneticist first and foremost, and \n        that's the scope of her ambition. With very flexible morals, O'Deorain prefers to focus on her research and \n        has no patience for those who urge caution or restraint. Her right hand is heavily scarred; it has been \n        speculated that it is a result of experimentation or a genetic anomaly."},{playerName:"Torbj\xf6rn",imgurl:"./images/Icon-Torbj\xf6rn.png",playerWiki:'Torbj\xf6rn Lindholm (called "Torby" by his friends) is one of the greatest weaponsmiths and \n        engineers in the world. He has a low opinion of omnics, believing them to be incapable of empathy, instead \n        acting purely on logic, and disagrees with giving them the same rights as humans.'}]},v=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,{teamData:w}),i.a.createElement(u,{teamData:w}),i.a.createElement(m,{teamData:w}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.54097048.chunk.js.map