var LNLParameters={
	"CodeId": "6c8847e6-d31f-6914-78b2-605053acbf82",
	"GUIActiveColor": "#D2232A",
	"GUIAggBorderColor": "white",
	"GUIBackgroundColor": "white",
	"GUIBorderColor": "gray",
	"GUIChatBorderColor": "white",
	"GUIChatColor": "#666666",
	"GUIChatNoFocusColor": "#D2232A",
	"GUINickNameColor": "#D2232A",
	"GUIToolbarBackgroundColor": "",
	"GUIStyle": "salomon.vl",
	"DefaultAvatarImageUser": "http://bin.livenetlife.com/images/user.png",
	"DefaultAvatarImageMySelf": "http://bin.livenetlife.com/images/user.png",
	"MinWidgetAggWidth": 0,
	"GUIPowerOffColor": "#D2232A",
	"GUIToolbarButtonColor": "white",
	"GUIButtonColor": "#666666",
	"HAlignementLeft": false,
	"MaximizedStart": false,
	"ObserveAudio": false,
	"EnableNickChange": true,
	"EnableAvatarImageChange": true,
	"DefaultNickNameUser": "visitor",
	"MaxMessageDisplayTimeMiliSeconds": 120000,
	"MaxDisplayedMessages": 6,
	"TimeSpeedMultiplierWhenNoFocus": 3,
	"EnableUrlParameters": true,
	"Opacity": 100,
	"PassiveOpacity": 25,
	"AwayOpacity": 50,
	"DisableMicrophoneCenter": false,
	"TargetBoundingRectId": "",
	"AnimationDuration": 0.3,
	"ScrollAnimationDuration": 300,
	"GUIFont": "Arial, sans-serif",
	"GUIBorderRadiusLeft": "0",
	"GUIBorderRadiusRight": "0 0",
	"GUIAggShadow": "#6f6f70 1px 1px 0",
	"GUIAggHover": "underline",
	"GUIAggDescriptionLink": "none",
	"GUIAggDescriptionHover": "none",
	"GUIToolbarRadius": "0",
	"MaxInactivityBeforeAwayStatusMiliseconds": 300000,
	"MaxInactivityBeforeDisconnectMiliseconds": 3600000,
	"ObserveMousePointer": false,
	"ShareMousePointer": false,
	"DefaultStartMouseSharing": false,
	"ShowOfflineOperatorButton": false,
	"AutoStart": true,
	"ShowPrivateChat": true,
	"EnableUserCloseButton": true,
	"AutoChatFocus": false,
	"ShowHelpOnFirstOpen": false,
	"ContentElementId": "",
	"PreferredChannel": "strophe",
	"GUIAggDescriptionLinkColor": "white",
	"GUIAggDescriptionLinkHoverColor": "white",
	"CountEveryOpenPageAsOneUser": true,
	"FixPlaceHolderBeforeFirstButtonMinWidth": 5000,
	"AnalyticsNativeEnabled": false,
	"BOSHURL": "http://54.154.148.21/http-bind",
	"DefaultAvatarsList": "http://bin.livenetlife.com/images/user.png;http://bin.livenetlife.com/images/userVL.png;http://megaicons.net/static/img/icons_sizes/51/200/48/professor-icon.png",
	"AllowPictureUpload": false,
	"ContentElementClassNames": "",
	"ContentElementTagNames": "",
	"DefaultNickList": "student;teacher",
	"AllowCustomNick": true,
	"UserLoginLink": "",
	"SelectPictureAndNickNameWidth": "350px",
	"EnableUserInfoURLDecision": false,
	"DoMedOverNetPictureAndNickNameHack": false,
	"DoMedOverNetLinksHack": false,
	"LinksWidgetTargetElementId": "livenetlife_links",
	"LinksWidgetWidth": "480px",
	"LinksWidgetMaxLinks": 5,
	"LinksWidgetMaxLinkCharacters": 200,
	"LinksWidgetTitleStyleName": "livenetlife_links_title",
	"LinksWidgetShowButtonStyleName": "livenetlife_links_button",
	"LinksWidgetLinkStyleName": "livenetlife_links_link",
	"LinksWidgetLinkLabelStyleName": "livenetlife_links_label",
	"DomReadStopWordsRegex": "",
	"ShowOnlyChattingUsers": true,
	"LinksWidgetMinLinks": 0,
	"LinksWidgetLinkPictureStyleName": "livenetlife_links_picture",
	"LinksWidgetLinkPictureDockLeft": true,
	"LinksWidgetLinkPictureWidth": "81px",
	"LinksWidgetLinkPictureHeight": "53px",
	"LinksWidgetTitleText": "What Others Watch Right Now",
	"LinksWidgetLinkPictureSearchTargetContent": true,
	"LinksWidgetStyleName": "livenetlife_links",
	"LinksWidgetLinkPictureDefaultUrl": "http://blogslo.videolectures.net/wp-content/uploads/2011/05/LOGO.png",
	"LinksWidgetLinkLabelOnlyText": false,
	"LinksWidgetLinkLabelSemaphorUserIconUrl": "",
	"LinksWidgetLinkLabelShowMaxUsers": true,
	"LinksWidgetLinkLabelSemaphorShowLongText": false
};
var LiveNetLife_LNLTextServer="http://engine.livenetlife.com/";var LiveNetLife_JabberServer="presence.server.livenetlife.com";var LiveNetLife_JabberMainChannel="7fe6da88c90f4c379cefc78a3121ffee_temp";var LiveNetLife_BOSHURL="bosh.server.livenetlife.com;";var LiveNetLife_ForwardServer="http://forward.livenetlife.com/";
 (function () {

//window.LNLParameters.ExternalCodeIdBlockRegex='5f8a9d7b-1202-4ab0-b7ec-94db434c563c';


        if (
window.location=="http://videolectures.net/yalepsyc123f08_psychology_biology_food/" ) //test oglasevanja z zemanto
        {
            window.LNLParameters.LinksWidgetAdvertisementEnabled = true;
	    window.LNLParameters.LinksWidgetAdvertisementPosition=4;
	    window.LNLParameters.LinksWidgetAdvertisementLinkClickersOnly=false;
	    window.LNLParameters.LinksWidgetAdvertisementURL = "http://text.server.livenetlife.com/ZemantaRecommendationAPI.aspx?PublisherId=3833728&IconDecoration5Stars=true&FakeIP=false&MaxTextLength=1000";
	    window.LNLParameters.LinksWidgetAdvertisementURLIncludeTextContentId = true;
	    window.LNLParameters.LinksWidgetAdvertisementURLIncludeJId = true;
        }

        window.LNLParameters.PageSummary='';
        try{
            window.LNLParameters.PageSummary = $('.lec_data').text().match(/views: (([0-9])+)/)[1] + ' views - ' + $('.lec_data a').first().text() + ', ' + $('.lec_data').text().match(/recorded: [A-z]+ (([0-9])+)/)[1];
        }
        catch (eerere){}


//        if (/^http:\/\/(www\.)?videolectures.net(\/)?(\?|#|$)/.test(window.location)) 
        window.LNLParameters.TopLinksQueryRegex="http://videolectures.net/.+";

        window.LNLParameters.EnableTouch=true;

        window.LNLParameters.EnableXMPP=false;


        window.LNLParameters.LoginFacebookEnable=true;
        window.LNLParameters.LoginFacebookAppId='1493746187545918';

        window.LNLParameters.EnableEarlyPing=true;
        window.LNLParameters.ChatEnableFlagButton=true;

        window.LNLParameters.LinksWidgetLinkLabelSemaphorShowInChatIcon=true;
        window.LNLParameters.LinksWidgetLinkLabelSemaphorShowInChatLabel=true;    	

window.LNLParameters.LinksWidgetLinkBoxStyleName = "livenetlife_linkswidget_linkbox";
        window.LNLParameters.LinksWidgetLinkBoxStyleNameExternal='livenetlife_linkbox_external';

        var div = document.createElement('div');
        var sidebar = document.getElementById('vl_hints');
        if (sidebar != null)//video page
        {

             var metas = document.getElementsByTagName('meta');
             for (i = 0; i < metas.length; i++) {
                 if (metas[i].getAttribute('property') == 'og:title') {
                     window.LNLParameters.PageTitle = metas[i].getAttribute('content');
                 }
            }

            div.id = 'livenetlife_links';
            sidebar.parentNode.insertBefore(div, sidebar);

            window.LNLParameters.TopLinksQueryRegex="http://videolectures.net/.+";
            window.LNLParameters.LinksWidgetOrderByPopularity = false;
            window.LNLParameters.LinksWidgetLinkSummaryStyleName = "livenetlife_links_summary";
            window.LNLParameters.LinksWidgetEnableLinkSummary = true;
           



            //lets take care of the content:
            var title = document.getElementsByTagName("h2").length > 0? (document.getElementsByTagName("h2")[0].innerText?document.getElementsByTagName("h2")[0].innerText:document.getElementsByTagName("h2")[0].innerHTML) : "";
            var desc = document.getElementById('lec_desc_edit')!=null ? (document.getElementById('lec_desc_edit').innerText?document.getElementById('lec_desc_edit').innerText:document.getElementById('lec_desc_edit').innerHTML): "";
            if (desc.length == 0){		
                var hints = document.getElementById('hint_list');
    	        if (hints!=null){
	            var eList = hints.getElementsByTagName('a');
                    var length = eList.length;
                    var textList = new Array(length);
                    for (i = 0; i < length; i++) {
                        textList[i] = (eList[i].innerText?eList[i].innerText:eList[i].innerHTML);
                    }
                    desc += " " + textList.join(" ").replace(/[0-9]+/g,' ');
                }
            }
            window.LNLParameters.UserDefinedContent = title + ' ' + desc;
            window.LNLParameters.DomReadStopWordsRegex = "Lecture|lecture|videolectures.net";


//not used currently
//           var textArray = new Array();
//           $('').each(function() {textArray.push($(this).text())});
//           window.LNLParameters.UserDefinedContent += " " + textArray.join(' ').trim();



             //ok now prepare advertising, but only if we are not inside iframe (that is dfp ad)
            if (window == window.top){
              window.LNLParameters.LinksWidgetAdvertisementEnabled = true;
	      window.LNLParameters.LinksWidgetAdvertisementPosition=3;
              window.LNLParameters.LinksWidgetAdvertisementDFPAdUnitWidthPx=476;
              window.LNLParameters.LinksWidgetAdvertisementDFPAdUnitHeightPx=56;
              window.LNLParameters.LinksWidgetAdvertisementDFPAdUnitId="/112416660/videolectures_video";
              //window.LNLParameters.LinksWidgetAdvertisementDFPAdUnitId="/112416660/empty";
              window.LNLParameters.LinksWidgetAdvertisementOnInViewOnly=false;
              window.LNLParameters.DFPCookiesDisable=false;
              window.LNLParameters.LinksWidgetAdvertisementDFPIsNative=true;
              window.LNLParameters.LinksWidgetAdvertisementUseExtraPosition = true;
            }


        }
        else {//homepage or author or category page
             window.LNLParameters.LinksWidgetOrderByPopularity = /^http:\/\/(www\.)?videolectures.net(\/)?(\?|#|$)/.test(window.location);
                 

            //first picture
            window.LNLParameters.PagePictureUrl = "https://upload.wikimedia.org/wikipedia/en/8/84/Videolectures_net_net_logo.jpg";

            if (document.getElementsByClassName != null && document.getElementsByClassName("evt_banner").length > 0 && document.getElementsByClassName("evt_banner")[0].getElementsByTagName("img").length > 0)
                window.LNLParameters.PagePictureUrl = document.getElementsByClassName("evt_banner")[0].getElementsByTagName("img")[0].src;
            else if (document.getElementById("dd_project_logo") != null && document.getElementById("dd_project_logo").getElementsByTagName("img").length > 0)
                window.LNLParameters.PagePictureUrl = document.getElementById("dd_project_logo").getElementsByTagName("img")[0].src;
            else if (document.getElementsByClassName != null && document.getElementById("innerbox") != null && document.getElementById("innerbox").getElementsByClassName("lec_thumb_img").length > 0) {

                try {
                    var background = document.getElementById("innerbox").getElementsByClassName("lec_thumb_img")[0].style.background;
                    window.LNLParameters.PagePictureUrl = background.substring(4, background.indexOf(")"));
                }
                catch (e) {

                }
            }

            //then content
            if (document.getElementById('innerbox') != null) {
                window.LNLParameters.ContentElementId = "innerbox";
                window.LNLParameters.DomReadStopWordsRegex = "organization|Description|search externally:|Google Schoolar|Springer|CiteSeer|Microsoft Academic Search|Scirus|DBlife|Lecture|Lectures|lecture|views|view|as author at";
            }
            else if (document.getElementById('vl_desc') != null) {
                window.LNLParameters.ContentElementId = "vl_desc";
                window.LNLParameters.DomReadStopWordsRegex = "Categories|Top|This event was|recorded|released under terms of:|Course|Homepage";
            }
            else if (document.getElementById('maincontainer') != null) {
                window.LNLParameters.ContentElementId = "maincontainer";
                window.LNLParameters.DomReadStopWordsRegex = "views|Lecture|invited talk|CATEGORIES|NEWSLETTER|RECENT EVENTS|MORE|NEWS|TOP AUTHORS|UPCOMING EVENTS";
            }
            else if (document.getElementById('idx_categories') != null) {
                window.LNLParameters.ContentElementId = "idx_categories";
                window.LNLParameters.DomReadStopWordsRegex = "CATEGORIES";
            }

            //for search results we use direct method
            var textArray = new Array();
            textArray.push($('.sres.lectures>a, .sres.events>a, ul.search-highlights>li').text().trim());
            window.LNLParameters.UserDefinedContent = textArray.join(' ').trim();





            //finaly linked list

            //first the styles
            window.LNLParameters.LinksWidgetWidth = "186px";
            window.LNLParameters.LinksWidgetMinLinks = 0;
            window.LNLParameters.LinksWidgetMaxLinks = 5;
            window.LNLParameters.LinksWidgetMaxLinkCharacters = 200;
            window.LNLParameters.LinksWidgetTitleStyleName = "livenetlife_links_title_homepage";
            window.LNLParameters.LinksWidgetShowButtonStyleName = "livenetlife_links_button_homepage";
            window.LNLParameters.LinksWidgetLinkStyleName = "livenetlife_links_link_homepage";
            window.LNLParameters.LinksWidgetLinkLabelStyleName = "livenetlife_links_label_homepage";
            window.LNLParameters.LinksWidgetLinkPictureStyleName = "livenetlife_links_picture_homepage";
            window.LNLParameters.LinksWidgetLinkPictureDockLeft = true;
            window.LNLParameters.LinksWidgetLinkPictureWidth = "60px";
            window.LNLParameters.LinksWidgetLinkPictureHeight = "40px";
            window.LNLParameters.LinksWidgetTitleText = "Watching Now";
            window.LNLParameters.LinksWidgetLinkPictureSearchTargetContent = true;
            window.LNLParameters.LinksWidgetStyleName = "livenetlife_links_homepage";
            window.LNLParameters.LinksWidgetEnableLinkSummary = false;
            
            //the the target div
            sidebar = document.getElementById('leftcolumn'); //homepage
            if (sidebar != null) {
                div.id = 'livenetlife_links_homepage';
                window.LNLParameters.LinksWidgetTargetElementId = "livenetlife_links_homepage";
                sidebar.insertBefore(div, sidebar.firstChild);
                window.LNLParameters.LinksWidgetMaxLinks = 5;
            }
            else {
                sidebar = document.getElementById('dd_form_sections'); //event page
                if (sidebar != null) {
                    div.id = 'livenetlife_links_event';
                    window.LNLParameters.LinksWidgetTargetElementId = "livenetlife_links_event";
                    sidebar.appendChild(div);
                    window.LNLParameters.LinksWidgetTitleStyleName = "livenetlife_links_title_event";
                    window.LNLParameters.LinksWidgetMaxLinks = 5;
                }
            }


        }

        var head = document.getElementsByTagName('head')[0];
        style = document.createElement('style');
        style.type = 'text/css';

        var styleList = [
            '#livenetlife_links{max-height:480px}',
            '.livenetlife_links{font-family:arial,sans-serif;margin-bottom:10px !important;}',
            '.livenetlife_links_title{display:block;background-color:#585858;background-image:url(http://media.videolectures.net/rel.1334874384/custom/bg_mod_title.png);background-position:bottom right;background-repeat:repeat-x;line-height:24px;font-family:Georgia, "Times New Roman", Times, serif;font-weight:normal;color:white;font-size:12px;text-transform:none;margin:0px 0 5px 0;padding:0px 10px 0px 10px;text-decoration:none;text-shadow:none;}',
            '.livenetlife_links_picture{margin-left:12px !important;   margin-right:5px !important; margin-bottom:2px !important;width:60px;height:40px;}',
            '.livenetlife_links_link{white-space:normal !important;max-width:382px !important;width:382px !important;font-size:10px !important;max-height:28px !important;}',
            '.livenetlife_links_button{background-color:#D2232A;border:none;color:white;font-size:11px;text-transform:uppercase;height:22px;background-image:url(http://media.videolectures.net/rel.1334874384/custom/searchArrows.png);background-repeat:no-repeat;background-position:70px;width:90px;margin:10px 0px 5px 12px;padding:0 35px 0 2px;vertical-align:top;}',
            '.livenetlife_linkswidget_linkbox.livenetlife_linkbox_external{background-color:lightgray;background-image:url(http://bin.livenetlife.com/images/external.png);background-repeat: no-repeat;background-position: 460px 0px; background-size: 22px;}',
            '.livenetlife_links_summary{font-size: smaller; color:#666; height: initial !important;   white-space: normal;}',
            'button.livenetlife_links_button:hover{}',
            '.livenetlife_links_label{font-size:10px;font-weight:normal;color:#666;}',
            '.livenetlife_links_label .gwt-Label{padding:0px 3px 0px 1px}',
            '#livenetlife_links_homepage{max-height:320px; }',
            '.livenetlife_links_homepage{background-color:white;font-family:arial,sans-serif;margin-bottom:10px !important;}',
            '.livenetlife_links_title_homepage{display:block;background-image:url(http://media.videolectures.net/rel.1334874384/custom/bg_mod_bullet.png);background-position:bottom right;background-repeat:repeat-x;line-height:1.7em;font-family:Georgia, "Times New Roman", Times, serif;font-weight:normal;padding-left:15px;color:white;text-shadow:#666 1px 1px 1px;font-size:14px;text-transform:uppercase;padding-bottom:15px;padding-top:1px;margin-bottom:4px;margin-top:0px;max-width:171px !important;}',
            '.livenetlife_links_picture_homepage{margin-left:0px !important;   margin-right:5px !important; margin-bottom:3px !important;width:60px;height:40px;}',
            '.livenetlife_links_link_homepage{white-space:normal !important;max-width:121px !important;width:121px !important;font-size:10px !important;max-height:28px !important;}',
            '.livenetlife_links_button_homepage{background-color:#D2232A;border:none;color:white;font-size:11px;text-transform:uppercase;height:22px;background-image:url(http://media.videolectures.net/rel.1334874384/custom/searchArrows.png);background-repeat:no-repeat;background-position:70px;width:90px;margin:10px 0px 5px 10px;padding:0 35px 0 2px;vertical-align:top;}',
            'button.livenetlife_links_button_homepage:hover{}.livenetlife_links_label_homepage{font-size:10px;font-weight:normal;}',
            '#livenetlife_links_event{max-height:302px;position:relative;left:-28px;overflow:visible !important;overflow-y:hidden}',
            '.livenetlife_links_title_event{display:block;background-color:#585858;background-image:url(http://media.videolectures.net/rel.1334874384/custom/bg_mod_title.png);background-position:bottom right;background-repeat:repeat-x;line-height:24px;font-family:Georgia, "Times New Roman", Times, serif;font-weight:normal;color:white;font-size:12px;text-transform:none;margin:10px 0 5px 0;padding:0px 10px 0px 10px;text-decoration:none;text-shadow:none;}',

            ];
        var rules = document.createTextNode(styleList.join(""));

        if (style.styleSheet)
            style.styleSheet.cssText = rules.nodeValue;
        else style.appendChild(rules);
        head.appendChild(style);

//user id
   try{
   var text = $('#jq_userctl').text();
   var username = text.substr(text.indexOf('Welcome '));
   LNLParameters.UserId=username.substr(8,username.indexOf('\n')).trim();
   }catch (eeere)
   {}
    })();function name_jureferlez_lnl_pageplugin_LNLPagePlugin(){var hb='',T=' top: -1000px;',qb='" for "gwt:onLoadErrorFn"',ob='" for "gwt:onPropertyErrorFn"',ab='");',rb='#',Db='&',uc='.cache.js',tb='/',zb='//',Ub='041263338C6B21988093D558A21CE7C3',Wb='101DC7F43436D7244B38C9A9779BD26A',Xb='272C4B50043B924833917C1030F53BE8',Zb='4209FEE8392DC2E6C8C7EF38AF1CD9D8',$b='45616F0BFD0B0C66FD8EEEF60F3E797E',_b='48F5CC5D1FDC7E9A5E861F286DA75C25',ac='4F8F5558C9C89D9B40C329F9039F9EC9',bc='5C9174ECDDC365F79295B82D248C9BBB',cc='6168FB91BC06FCED74DFAE735A7BF040',dc='69DD20B32300EFF4C349AD1689B032FA',fc='81FC3644F39C75B451616E7D8F059E8A',gc='8A0B72BCBC2502FFC676DE22F6C86038',hc='8A7FD4F61DF5687734FEE40513B170C3',ic='8C7B195A8515A02C9BE4DDA585EAF008',jc='9B9005D68AF82215D58E26106C298202',kc='9CB523FA9F94D8C7394D6D30BF0C064E',tc=':',ib='::',U='<html><head><\/head><body><\/body><\/html>',lb='=',sb='?',lc='B1150B38ED0F9F8D9F5309FDB7DC8088',nb='Bad handler "',mc='CAF72FB1DE007E805B8D53F449E0BDA8',$='Chrome',nc='DF772322ED69DA99433777EBECE67741',Z='DOMContentLoaded',O='DUMMY',oc='E1286A492251CFDDE9D62523A317FCC3',pc='E7B9EBF576922E04EE89DC0DC32C8F9F',qc='F65B87F73B7D985258FB82487A8693BA',rc='F9AE840391C7B3BCB292602DDDD1BB03',sc='FC70062F39660F70575ABC1476FBA43B',Gb='Unexpected exception in locale detection, using default: ',Fb='_',Eb='__gwt_Locale',yb='base',wb='baseUrl',J='begin',P='body',I='bootstrap',vb='clear.cache.gif',kb='content',ec='de',Yb='default',Bb='en',wc='end',_='eval("',Pb='gecko',Qb='gecko1_8',K='gwt.codesvr.name.jureferlez.lnl.pageplugin.LNLPagePlugin=',L='gwt.codesvr=',pb='gwt:onLoadErrorFn',mb='gwt:onPropertyErrorFn',jb='gwt:property',db='head',Ob='ie6',Nb='ie8',Mb='ie9',Q='iframe',ub='img',W='javascript',R='javascript:""',vc='loadExternalRefs',Ab='locale',Cb='locale=',eb='meta',cb='moduleRequested',bb='moduleStartup',Lb='msie',fb='name',M='name.jureferlez.lnl.pageplugin.LNLPagePlugin',Tb='name.jureferlez.lnl.pageplugin.LNLPagePlugin.devmode.js',xb='bin.livenetlife.com',gb='name.jureferlez.lnl.pageplugin.LNLPagePlugin::',Ib='opera',S='position:absolute; width:0; height:0; border:none; left: -1000px;',Kb='safari',V='script',Sb='selectingPermutation',Vb='sl',N='startup',Y='undefined',Rb='unknown',Hb='user.agent',X='var $wnd = window.parent;',Jb='webkit';var q=window;var r=document;t(I,J);function s(){var a=q.location.search;return a.indexOf(K)!=-1||a.indexOf(L)!=-1}
function t(a,b){if(q.__gwtStatsEvent){q.__gwtStatsEvent({moduleName:M,sessionId:q.__gwtStatsSessionId,subSystem:N,evtGroup:a,millis:(new Date).getTime(),type:b})}}
name_jureferlez_lnl_pageplugin_LNLPagePlugin.__sendStats=t;name_jureferlez_lnl_pageplugin_LNLPagePlugin.__moduleName=M;name_jureferlez_lnl_pageplugin_LNLPagePlugin.__errFn=null;name_jureferlez_lnl_pageplugin_LNLPagePlugin.__moduleBase=O;name_jureferlez_lnl_pageplugin_LNLPagePlugin.__softPermutationId=0;name_jureferlez_lnl_pageplugin_LNLPagePlugin.__computePropValue=null;name_jureferlez_lnl_pageplugin_LNLPagePlugin.__getPropMap=null;name_jureferlez_lnl_pageplugin_LNLPagePlugin.__gwtInstallCode=function(){};name_jureferlez_lnl_pageplugin_LNLPagePlugin.__gwtStartLoadingFragment=function(){return null};var u=function(){return false};var v=function(){return null};__propertyErrorFunction=null;var w=q.__gwt_activeModules=q.__gwt_activeModules||{};w[M]={moduleName:M};var x;function y(){A();return x}
function z(){A();return x.getElementsByTagName(P)[0]}
function A(){if(x){return}var a=r.createElement(Q);a.src=R;a.id=M;a.style.cssText=S+T;a.tabIndex=-1;r.body.appendChild(a);x=a.contentDocument;if(!x){x=a.contentWindow.document}x.open();x.write(U);x.close();var b=x.getElementsByTagName(P)[0];var c=x.createElement(V);c.language=W;var d=X;c.text=d;b.appendChild(c)}
function B(k){function l(a){function b(){if(typeof r.readyState==Y){return typeof r.body!=Y&&r.body!=null}return /loaded|complete|interactive|loading/.test(r.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(r.removeEventListener){r.removeEventListener(Z,d,false)}if(e){clearInterval(e)}}}
if(r.addEventListener){r.addEventListener(Z,d,false)}var e=setInterval(function(){if(b()){d()}},50)}
function m(c){function d(a,b){a.removeChild(b)}
var e=z();var f=y();var g;if(navigator.userAgent.indexOf($)>-1&&window.JSON){var h=f.createDocumentFragment();h.appendChild(f.createTextNode(_));for(var i=0;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(f.createTextNode(j.substring(1,j.length-1)))}h.appendChild(f.createTextNode(ab));g=f.createElement(V);g.language=W;g.appendChild(h);e.appendChild(g);d(e,g)}else{for(var i=0;i<c.length;i++){g=f.createElement(V);g.language=W;g.text=c[i];e.appendChild(g);d(e,g)}}}
name_jureferlez_lnl_pageplugin_LNLPagePlugin.onScriptDownloaded=function(a){l(function(){m(a)})};t(bb,cb);var n=r.createElement(V);n.src=k;r.getElementsByTagName(db)[0].appendChild(n)}
name_jureferlez_lnl_pageplugin_LNLPagePlugin.__startLoadingFragment=function(a){return E(a)};name_jureferlez_lnl_pageplugin_LNLPagePlugin.__installRunAsyncCode=function(a){var b=z();var c=y().createElement(V);c.language=W;c.text=a;b.appendChild(c);b.removeChild(c)};function C(){var c={};var d;var e;var f=r.getElementsByTagName(eb);for(var g=0,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(fb),k;if(j){j=j.replace(gb,hb);if(j.indexOf(ib)>=0){continue}if(j==jb){k=i.getAttribute(kb);if(k){var l,m=k.indexOf(lb);if(m>=0){j=k.substring(0,m);l=k.substring(m+1)}else{j=k;l=hb}c[j]=l}}else if(j==mb){k=i.getAttribute(kb);if(k){try{d=eval(k)}catch(a){alert(nb+k+ob)}}}else if(j==pb){k=i.getAttribute(kb);if(k){try{e=eval(k)}catch(a){alert(nb+k+qb)}}}}}v=function(a){var b=c[a];return b==null?null:b};__propertyErrorFunction=d;name_jureferlez_lnl_pageplugin_LNLPagePlugin.__errFn=e}
function D(){function e(a){var b=a.lastIndexOf(rb);if(b==-1){b=a.length}var c=a.indexOf(sb);if(c==-1){c=a.length}var d=a.lastIndexOf(tb,Math.min(c,b));return d>=0?a.substring(0,d+1):hb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=r.createElement(ub);b.src=a+vb;a=e(b.src)}return a}
function g(){var a=v(wb);if(a!=null){return a}return hb}
function h(){var a=r.getElementsByTagName(V);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(xb)!=-1){return e(a[b].src)}}return hb}
function i(){var a=r.getElementsByTagName(yb);if(a.length>0){return a[a.length-1].href}return hb}
function j(){var a=r.location;return a.href==a.protocol+zb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==hb){k=h()}if(k==hb){k=i()}if(k==hb&&j()){k=e(r.location.href)}k=f(k);return k}
function E(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return name_jureferlez_lnl_pageplugin_LNLPagePlugin.__moduleBase+a}
function F(){var i=[];var j;function k(a,b){var c=i;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var l=[];var m=[];function n(a){var b=m[a](),c=l[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(__propertyErrorFunc){__propertyErrorFunc(a,d,b)}throw null}
m[Ab]=function(){var b=null;var c=Bb;try{if(!b){var d=location.search;var e=d.indexOf(Cb);if(e>=0){var f=d.substring(e+7);var g=d.indexOf(Db,e);if(g<0){g=d.length}b=d.substring(e+7,g)}}if(!b){b=v(Ab)}if(!b){b=q[Eb]}if(b){c=b}while(b&&!u(Ab,b)){var h=b.lastIndexOf(Fb);if(h<0){b=null;break}b=b.substring(0,h)}}catch(a){alert(Gb+a)}q[Eb]=c;return b||Bb};l[Ab]={de:0,'default':1,en:2,sl:3};m[Hb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Ib)!=-1}())return Ib;if(function(){return b.indexOf(Jb)!=-1}())return Kb;if(function(){return b.indexOf(Lb)!=-1&&r.documentMode>=9}())return Mb;if(function(){return b.indexOf(Lb)!=-1&&r.documentMode>=8}())return Nb;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(a&&a.length==3)return c(a)>=6000}())return Ob;if(function(){return b.indexOf(Pb)!=-1}())return Qb;return Rb};l[Hb]={gecko1_8:0,ie6:1,ie8:2,ie9:3,opera:4,safari:5};u=function(a,b){return b in l[a]};name_jureferlez_lnl_pageplugin_LNLPagePlugin.__getPropMap=function(){var a={};for(var b in l){a[b]=n(b)}return a};name_jureferlez_lnl_pageplugin_LNLPagePlugin.__computePropValue=n;q.__gwt_activeModules[M].bindings=name_jureferlez_lnl_pageplugin_LNLPagePlugin.__getPropMap;t(I,Sb);if(s()){return E(Tb)}var o;try{k([Bb,Ob],Ub);k([Vb,Kb],Wb);k([Vb,Qb],Xb);k([Yb,Mb],Zb);k([Yb,Ob],$b);k([Yb,Ib],_b);k([Bb,Kb],ac);k([Vb,Nb],bc);k([Bb,Mb],cc);k([Bb,Qb],dc);k([ec,Ob],fc);k([Vb,Ib],gc);k([Bb,Nb],hc);k([ec,Kb],ic);k([ec,Ib],jc);k([Yb,Qb],kc);k([Vb,Mb],lc);k([Yb,Nb],mc);k([Bb,Ib],nc);k([Vb,Ob],oc);k([ec,Qb],pc);k([ec,Mb],qc);k([ec,Nb],rc);k([Yb,Kb],sc);o=i[n(Ab)][n(Hb)];var p=o.indexOf(tc);if(p!=-1){j=parseInt(o.substring(p+1),10);o=o.substring(0,p)}}catch(a){}name_jureferlez_lnl_pageplugin_LNLPagePlugin.__softPermutationId=j;return E(o+uc)}
function G(){if(!q.__gwt_stylesLoaded){q.__gwt_stylesLoaded={}}t(vc,J);t(vc,wc)}
C();name_jureferlez_lnl_pageplugin_LNLPagePlugin.__moduleBase=D();w[M].moduleBase=name_jureferlez_lnl_pageplugin_LNLPagePlugin.__moduleBase;var H=F();G();t(I,wc);B(H);return true}
name_jureferlez_lnl_pageplugin_LNLPagePlugin.succeeded=name_jureferlez_lnl_pageplugin_LNLPagePlugin();