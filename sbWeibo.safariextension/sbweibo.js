// Flora sbWeibo by LeaskH.com

var whiteList = {'AppleApril' : true};

var sbLogo = 'url(data:image/gif;base64,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)';

var sbImage = {
    width    : '30px',
    position : '0 0',
    date     : 'url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAYAAAA45qw5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbhJREFUeNqMVLttwzAQpQ1nAGUEa4EAdpNerlNJI8gjxCPIXcrYI5hAFghHiEeIRhDrJIVzZ7wDXhja1gEPwom8z3tHcvL9WjiykyAIVvRvEPSCpftvraC4Ww9bdX52960bYbJ/P6HCleBdcBQsRsSXgg8tLNgIvODTjbNylnSvthfs0EABaNIa6z0aMxW0eCeIgjXtu2ReGPfGuICkEUwGNHBEE2YNlNEmJ6TUQdckYRC5lfX8isznOGPc4RsBh+Aa/h4FOjTDibRYKd+Y1Ngk/jMIOitckcxsVRLkqCFTKaI4F40YQ5qTSTmV+pDMrwQzY+zBssU/T6w7SrxCg/MbM15qo1PIuM0wMpmPNG/7r3u+cPViEltgf4Bv8ZHWz1IHwOQ84NTaf2PfIGgH9srwhXxHI2hpnhXy/XkwphkpGiQNJGWLx2VAogbrObPD6OEH+D1vml04VB11GOgeV0gcrsxwFONc4YDutihmM7V5rWiuLR1MU8cnc88p4vjJPKHgmgrVySk1ttrAo+AJMYHmbNcpZpQwbHKFI73VPRh4SFbT2pvgQRXQJ1AekQWKVzeulOZf/gowAMX1mOyMtRFmAAAAAElFTkSuQmCC)'
};

var domSbLogo = document.getElementsByClassName('gn_logo')[0];
domSbLogo.style.backgroundImage = sbLogo;

var sb = function() {
    var domV = document.querySelectorAll('[class*="W_ico16 approve"]');
    for (var i = 0; i < domV.length; i++) {
        var domNs = domV[i].parentNode.parentNode.getElementsByClassName('WB_name');
        if (domNs.length) {
            var domN = domNs[0];
            var inWhiteList = false;
            for (var j = 0; j < domN.attributes.length; j++) {
                if (domN.attributes[j].nodeName === 'nick-name') {
                    var userId = domN.attributes[j].nodeValue;
                    if (typeof whiteList[userId] !== 'undefined') {
                        inWhiteList = true;
                    }
                    break;
                }
            }
            if (inWhiteList) {
                break;
            }
        }
        domNs = domV[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName('name');
        if (domNs.length) {
            domN = domNs[0];
            userId = domN.textContent;
            if (typeof whiteList[userId] !== 'undefined') {
                break;
            }
        }
        domV[i].style.backgroundImage    = sbImage.date;
        domV[i].style.width              = sbImage.width;
        domV[i].style.backgroundPosition = sbImage.position;
    }
}

setInterval(sb, 1000 * 7);
