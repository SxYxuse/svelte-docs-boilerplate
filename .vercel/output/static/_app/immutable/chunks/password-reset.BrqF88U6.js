import{d as f,a,t as s,f as l,b as t,c as I}from"./disclose-version.Bedei8AD.js";import{h as m}from"./index.DWgPtC_I.js";import{B as F,H as K,P as i}from"./blueprint.CLPDHYwR.js";import{H as h}from"./h2.BLVNhL6Q.js";import{A as p}from"./a.CxCmjLdc.js";import{P as R}from"./pre.DAToQk2m.js";var L=s("Password reset",1),Y=s("Overview",1),j=s("Email verification",1),G=s("A common approach to password reset is to use the user's email address. The user enters their email and, if the email is valid, a password reset link is sent to the mailbox. This requires each user to have a unique email address - see the <!> guide.",1),J=s("The email does not need to be verified before sending a reset link. You should even mark a user's email address as verified if they reset their password.",1),Q=s("This page will only cover password reset links as it is the most common approach.",1),V=s("Password reset links",1),Z=s("Password reset requires 2 pages. First is the page where users enter their email address.",1),ee=s("token",1),te=s("Next is the actual password reset form, where the user enters their new password. This is the link that gets sent to the user's mailbox. A password reset <!> is included as part of the URL path.",1),re=s("Tokens should be valid for around an hour, and 24 hours at most. Invalidate existing tokens when sending another token, or reuse an existing valid token if one already exists. It's recommended to hash tokens with SHA-256 before storing them.",1),ae=s("The token must be single-use. Delete the token when the user sends a valid password through the form.",1),se=s("Referrer Policy",1),oe=s("Make sure to set the <!> tag to <!> for any path that includes tokens to protect the tokens from referer leakage.",1),ne=s("multi-factor authentication",1),ie=s("If the user has implemented <!>, such as via authenticator apps or passkeys, they should be prompted to authenticate using their second factor before entering their new password.",1),de=s("Error handling",1),le=s("Error handling",1),ue=s(`If the email is invalid, you can either tell the user that the email is invalid or keep the message vague (e.g. "We'll send a reset email if the account exists"). This will depend on whether you'd want to keep the validity of emails public or private. See <!> in the Password authentication guide for more information.`,1),_e=s("Rate limiting",1),pe=s("Any endpoint that can send emails should have strict rate limiting implemented. Use Captchas if necessary.",1),he=s('<!> <!> <!> <!> <!> <!> <!> <figure data-rehype-pretty-code-figure=""><!></figure> <!> <figure data-rehype-pretty-code-figure=""><!></figure> <!> <!> <!> <!> <!> <!> <!> <!>',1);const fe={title:"Password reset"};function Pe(q){var v=f(),B=l(v);F(B,{metadata:fe,children:(U,me)=>{var $=he(),g=l($);K(g,{id:"password-reset",children:(r,o)=>{var e=L();a(r,e)},$$slots:{default:!0}});var c=t(t(g,!0));h(c,{id:"overview",children:(r,o)=>{var e=Y();a(r,e)},$$slots:{default:!0}});var y=t(t(c,!0));i(y,{children:(r,o)=>{var e=G(),n=t(l(e,!0));p(n,{href:"/content/email-verification",children:(d,_)=>{var u=j();a(d,u)},$$slots:{default:!0}}),a(r,e)},$$slots:{default:!0}});var S=t(t(y,!0));i(S,{children:(r,o)=>{var e=J();a(r,e)},$$slots:{default:!0}});var P=t(t(S,!0));i(P,{children:(r,o)=>{var e=Q();a(r,e)},$$slots:{default:!0}});var M=t(t(P,!0));h(M,{id:"password-reset-links",children:(r,o)=>{var e=V();a(r,e)},$$slots:{default:!0}});var w=t(t(M,!0));i(w,{children:(r,o)=>{var e=Z();a(r,e)},$$slots:{default:!0}});var k=t(t(w,!0)),N=I(k);R(N,{class:"Serendipity Midnight Serendipity Morning",tabindex:"0","data-language":"untype","data-theme":"Serendipity Midnight Serendipity Morning",children:(r,o)=>{var e=f(),n=l(e);m(n,()=>'<code data-language="untype" data-theme="Serendipity Midnight Serendipity Morning" style="display: grid;"><span data-line=""><span>https://example.com/reset-password</span></span></code>'),a(r,e)},$$slots:{default:!0}});var D=t(t(k,!0));i(D,{children:(r,o)=>{var e=te(),n=t(l(e,!0));p(n,{href:"/content/server-side-tokens",children:(d,_)=>{var u=ee();a(d,u)},$$slots:{default:!0}}),a(r,e)},$$slots:{default:!0}});var C=t(t(D,!0)),O=I(C);R(O,{class:"Serendipity Midnight Serendipity Morning",tabindex:"0","data-language":"untype","data-theme":"Serendipity Midnight Serendipity Morning",children:(r,o)=>{var e=f(),n=l(e);m(n,()=>'<code data-language="untype" data-theme="Serendipity Midnight Serendipity Morning" style="display: grid;"><span data-line=""><span>https://example.com/reset-password/&lt;TOKEN></span></span></code>'),a(r,e)},$$slots:{default:!0}});var X=t(t(C,!0));i(X,{children:(r,o)=>{var e=re();a(r,e)},$$slots:{default:!0}});var b=t(t(X,!0));i(b,{children:(r,o)=>{var e=ae();a(r,e)},$$slots:{default:!0}});var x=t(t(b,!0));i(x,{children:(r,o)=>{var e=oe(),n=t(l(e,!0));p(n,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy",children:(_,u)=>{var z=se();a(_,z)},$$slots:{default:!0}});var d=t(t(n,!0));m(d,()=>"<code>no-referrer</code>"),a(r,e)},$$slots:{default:!0}});var T=t(t(x,!0));i(T,{children:(r,o)=>{var e=ie(),n=t(l(e,!0));p(n,{href:"/content/mfa",children:(d,_)=>{var u=ne();a(d,u)},$$slots:{default:!0}}),a(r,e)},$$slots:{default:!0}});var H=t(t(T,!0));h(H,{id:"error-handling",children:(r,o)=>{var e=de();a(r,e)},$$slots:{default:!0}});var A=t(t(H,!0));i(A,{children:(r,o)=>{var e=ue(),n=t(l(e,!0));p(n,{href:"/content/password-authentication#error-handling",children:(d,_)=>{var u=le();a(d,u)},$$slots:{default:!0}}),a(r,e)},$$slots:{default:!0}});var E=t(t(A,!0));h(E,{id:"rate-limiting",children:(r,o)=>{var e=_e();a(r,e)},$$slots:{default:!0}});var W=t(t(E,!0));i(W,{children:(r,o)=>{var e=pe();a(r,e)},$$slots:{default:!0}}),a(U,$)},$$slots:{default:!0}}),a(q,v)}export{Pe as default,fe as metadata};