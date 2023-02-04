"use strict";(self.webpackChunkfortio=self.webpackChunkfortio||[]).push([[103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},s="Usage",i={unversionedId:"getting-started/usage",id:"getting-started/usage",title:"Usage",description:"\u03a6\u03bf\u03c1\u03c4\u03af\u03bf usage:",source:"@site/docs/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/docs/getting-started/usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"}},l={},p=[{value:"Command",id:"command",level:2},{value:"Target",id:"target",level:2},{value:"Flags",id:"flags",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"\u03a6\u03bf\u03c1\u03c4\u03af\u03bf usage:\n",(0,o.kt)("inlineCode",{parentName:"p"},"fortio command [flags] target")),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"command")," is one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"load (load testing)"),(0,o.kt)("li",{parentName:"ul"},"server (starts ui, rest api, http-echo, redirect, proxies, tcp-echo, udp-echo and grpc ping servers)"),(0,o.kt)("li",{parentName:"ul"},"tcp-echo (only the tcp-echo server)"),(0,o.kt)("li",{parentName:"ul"},"udp-echo (only udp-echo server)"),(0,o.kt)("li",{parentName:"ul"},"report (report only UI server)"),(0,o.kt)("li",{parentName:"ul"},"redirect (only the redirect server)"),(0,o.kt)("li",{parentName:"ul"},"proxies (only the -M and -P configured proxies)"),(0,o.kt)("li",{parentName:"ul"},"grpcping (grpc client)"),(0,o.kt)("li",{parentName:"ul"},"curl (single URL debug)"),(0,o.kt)("li",{parentName:"ul"},"nc (single tcp or udp:// connection)"),(0,o.kt)("li",{parentName:"ul"},"version (prints the full version and build details)")),(0,o.kt)("h2",{id:"target"},"Target"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"target")," is"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"url (http load tests) or host:port (grpc health test)"),(0,o.kt)("li",{parentName:"ul"},"tcp://host:port (tcp load test), or udp://host:port (udp load test).")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"flags")," are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -H key:value\n        Additional http header(s) or grpc metadata. Multiple key:value pairs can be passed using multiple -H.\n  -L    Follow redirects (implies -std-client) - do not use for load test\n  -M value\n        Http multi proxy to run, e.g -M "localport1 baseDestURL1 baseDestURL2" -M ...\n  -P value\n        Tcp proxies to run, e.g -P "localport1 dest_host1:dest_port1" -P "[::1]:0 www.google.com:443" ...\n  -a    Automatically save JSON result with filename based on labels & timestamp\n  -abort-on code\n        Http code that if encountered aborts the run. e.g. 503 or -1 for socket errors.\n  -access-log-file path\n        file path to log all requests to. Maybe have performance impacts\n  -access-log-format format\n        format for access log. Supported values: [json, influx] (default "json")\n  -allow-initial-errors\n        Allow and don\'t abort on initial warmup errors\n  -base-url URL\n        base URL used as prefix for data/index.tsv generation. (when empty, the url from the first request is used)\n  -c int\n        Number of connections/goroutine/threads (default 4)\n  -cacert Path\n        Path to a custom CA certificate file to be used for the TLS client connections, if empty, use https:// prefix for standard internet/system CAs\n  -calc-qps\n        Calculate the qps based on number of requests (-n) and duration (-t)\n  -cert Path\n        Path to the certificate file to be used for client or server TLS\n  -compression\n        Enable http compression\n  -config path\n        Config directory path to watch for changes of dynamic flags (empty for no watch)\n  -connection-reuse min:max\n        Range min:max for the max number of connections to reuse for each thread, default to unlimited. e.g. 10:30 means randomly choose a max connection reuse threshold between 10 and 30 requests.\n  -content-type string\n        Sets http content type. Setting this value switches the request method from GET to POST.\n  -curl\n        Just fetch the content once\n  -curl-stdout-headers\n        Restore pre 1.22 behavior where http headers of the fast client are output to stdout in curl mode. now stderr by default.\n  -data-dir Directory\n        Directory where JSON results are stored/read (default ".")\n  -dns-method method\n        When a name resolves to multiple ip, which method to pick: cached-rr for cached round robin, rnd for random, first for first answer (pre 1.30 behavior), rr for round robin. (default cached-rr)\n  -echo-debug-path URI\n        http echo server URI for debug, empty turns off that part (more secure) (default "/debug")\n  -echo-server-default-params value\n        Default parameters/querystring to use if there isn\'t one provided explicitly. E.g "status=404&delay=3s"\n  -gomaxprocs int\n        Setting for runtime.GOMAXPROCS, <1 doesn\'t change the default\n  -grpc\n        Use GRPC (health check by default, add -ping for ping) for load testing\n  -grpc-max-streams uint\n        MaxConcurrentStreams for the grpc server. Default (0) is to leave the option unset.\n  -grpc-ping-delay duration\n        grpc ping delay in response\n  -grpc-port port\n        grpc server port. Can be in the form of host:port, ip:port or port or /unix/domain/path or "disabled" to not start the grpc server. (default "8079")\n  -h    Print usage/help on stdout\n  -h2\n        Attempt to use http2.0 / h2 (instead of http 1.1) with stdclient and TLS\n  -halfclose\n        When not keepalive, whether to half close the connection (only for fast http)\n  -health\n        grpc ping client mode: use health instead of ping\n  -healthservice string\n        which service string to pass to health check\n  -http-port port\n        http echo server port. Can be in the form of host:port, ip:port, port or /unix/domain/path or "disabled". (default "8080")\n  -http1.0\n        Use http1.0 (instead of http 1.1)\n  -httpbufferkb kbytes\n        Size of the buffer (max data size) for the optimized http client in kbytes (default 128)\n  -httpccch\n        Check for Connection: Close Header\n  -https-insecure\n        Long form of the -k flag\n  -jitter\n        set to true to de-synchronize parallel clients\' by 10%\n  -json path\n        Json output to provided file path or \'-\' for stdout (empty = no json output, unless -a is used)\n  -k    Do not verify certs in https/tls/grpc connections\n  -keepalive\n        Keep connection alive (only for fast http 1.1) (default true)\n  -key Path\n        Path to the key file matching the -cert\n  -labels string\n        Additional config data/labels to add to the resulting JSON, defaults to target URL and hostname\n  -log-errors\n        Log http non 2xx/418 error codes as they occur (default true)\n  -logcaller\n        Logs filename and line number of callers to log (default true)\n  -logfatalpanics\n        If true, log.Fatal will panic (stack trace) instead of just exit 1 (default true)\n  -loglevel value\n        loglevel, one of [Debug Verbose Info Warning Error Critical Fatal] (default Info)\n  -logprefix string\n        Prefix to log lines before logged messages (default "> ")\n  -max-echo-delay value\n        Maximum sleep time for delay= echo server parameter. dynamic flag. (default 1.5s)\n  -maxpayloadsizekb Kbytes\n        MaxPayloadSize is the maximum size of payload to be generated by the EchoHandler size= argument. In Kbytes. (default 256)\n  -multi-mirror-origin\n        Mirror the request url to the target for multi proxies (-M) (default true)\n  -multi-serial-mode\n        Multi server (-M) requests one at a time instead of parallel mode\n  -n int\n        Run for exactly this number of calls instead of duration. Default (0) is to use duration (-t). Default is 1 when used as grpc ping count.\n  -nc-dont-stop-on-eof\n        in netcat (nc) mode, don\'t abort as soon as remote side closes\n  -no-reresolve\n        Keep the initial DNS resolution and don\'t re-resolve when making new connections (because of error or reuse limit reached)\n  -nocatchup\n        set to exact fixed qps and prevent fortio from trying to catchup when the target fails to keep up temporarily\n  -offset duration\n        Offset of the histogram data\n  -p string\n        List of pXX to calculate (default "50,75,90,99,99.9")\n  -payload string\n        Payload string to send along\n  -payload-file path\n        File path to be use as payload (POST for http), replaces -payload when set.\n  -payload-size int\n        Additional random payload size, replaces -payload when set > 0, must be smaller than -maxpayloadsizekb. Setting this switches http to POST.\n  -ping\n        grpc load test: use ping instead of health\n  -profile file\n        write .cpu and .mem profiles to file\n  -proxy-all-headers\n        Determines if only tracing or all headers (and cookies) are copied from request on the fetch2 ui/server endpoint (default true)\n  -qps float\n        Queries Per Seconds or 0 for no wait/max qps (default 8)\n  -quiet\n        Quiet mode: sets the loglevel to Error and reduces the output.\n  -r float\n        Resolution of the histogram lowest buckets in seconds (default 0.001)\n  -redirect-port port\n        Redirect all incoming traffic to https URL (need ingress to work properly). Can be in the form of host:port, ip:port, port or "disabled" to disable the feature. (default "8081")\n  -resolve IP\n        Resolve host name to this IP\n  -resolve-ip-type type\n        Resolve type: ip4 for ipv4, ip6 for ipv6 only, use ip for both (default ip4)\n  -runid int\n        Optional RunID to add to json result and auto save filename, to match server mode\n  -s int\n        Number of streams per grpc connection (default 1)\n  -sequential-warmup\n        http(s) runner warmup done in parallel instead of sequentially. When set, restores pre 1.21 behavior\n  -server-idle-timeout value\n        Default IdleTimeout for servers (default 30s)\n  -static-dir path\n        Deprecated/unused path.\n  -stdclient\n        Use the slower net/http standard client (slower but supports h2)\n  -sync URL\n        index.tsv or s3/gcs bucket xml URL to fetch at startup for server modes.\n  -sync-interval duration\n        Refresh the url every given interval (default, no refresh)\n  -t duration\n        How long to run the test or 0 to run until ^C (default 5s)\n  -tcp-port port\n        tcp echo server port. Can be in the form of host:port, ip:port, port or /unix/domain/path or "disabled". (default "8078")\n  -timeout duration\n        Connection and read timeout value (for http) (default 3s)\n  -udp-async\n        if true, udp echo server will use separate go routine to reply\n  -udp-port port\n        udp echo server port. Can be in the form of host:port, ip:port, port or "disabled". (default "8078")\n  -udp-timeout duration\n        Udp timeout (default 750ms)\n  -ui-path URI\n        http server URI for UI, empty turns off that part (more secure) (default "/fortio/")\n  -uniform\n        set to true to de-synchronize parallel clients\' requests uniformly\n  -unix-socket path\n        Unix domain socket path to use for physical connection\n  -user user:password\n        User credentials for basic authentication (for http). Input data format should be user:password\n')))}c.isMDXComponent=!0}}]);