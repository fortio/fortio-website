---
sidebar_position: 2
---

# Usage

Φορτίο usage:
`fortio command [flags] target`


## Command
`command` is one of:
- load (load testing)
- server (starts ui, rest api, http-echo, redirect, proxies, tcp-echo, udp-echo and grpc ping servers)
- tcp-echo (only the tcp-echo server)
- udp-echo (only udp-echo server)
- report (report only UI server)
- redirect (only the redirect server)
- proxies (only the -M and -P configured proxies)
- grpcping (grpc client)
- curl (single URL debug)
- nc (single tcp or udp:// connection)
- version (prints the full version and build details)

## Target
`target` is
- url (http load tests) or host:port (grpc health test)
- tcp://host:port (tcp load test), or udp://host:port (udp load test).

## Flags
`flags` are:
```
  -H key:value
    	Additional http header(s) or grpc metadata. Multiple key:value pairs can be passed using multiple -H.
  -L	Follow redirects (implies -std-client) - do not use for load test
  -M value
    	Http multi proxy to run, e.g -M "localport1 baseDestURL1 baseDestURL2" -M ...
  -P value
    	Tcp proxies to run, e.g -P "localport1 dest_host1:dest_port1" -P "[::1]:0 www.google.com:443" ...
  -a	Automatically save JSON result with filename based on labels & timestamp
  -abort-on code
    	Http code that if encountered aborts the run. e.g. 503 or -1 for socket errors.
  -access-log-file path
    	file path to log all requests to. Maybe have performance impacts
  -access-log-format format
    	format for access log. Supported values: [json, influx] (default "json")
  -allow-initial-errors
    	Allow and don't abort on initial warmup errors
  -base-url URL
    	base URL used as prefix for data/index.tsv generation. (when empty, the url from the first request is used)
  -c int
    	Number of connections/goroutine/threads (default 4)
  -cacert Path
    	Path to a custom CA certificate file to be used for the TLS client connections, if empty, use https:// prefix for standard internet/system CAs
  -calc-qps
    	Calculate the qps based on number of requests (-n) and duration (-t)
  -cert Path
    	Path to the certificate file to be used for client or server TLS
  -compression
    	Enable http compression
  -config path
    	Config directory path to watch for changes of dynamic flags (empty for no watch)
  -connection-reuse min:max
    	Range min:max for the max number of connections to reuse for each thread, default to unlimited. e.g. 10:30 means randomly choose a max connection reuse threshold between 10 and 30 requests.
  -content-type string
    	Sets http content type. Setting this value switches the request method from GET to POST.
  -curl
    	Just fetch the content once
  -curl-stdout-headers
    	Restore pre 1.22 behavior where http headers of the fast client are output to stdout in curl mode. now stderr by default.
  -data-dir Directory
    	Directory where JSON results are stored/read (default ".")
  -dns-method method
    	When a name resolves to multiple ip, which method to pick: cached-rr for cached round robin, rnd for random, first for first answer (pre 1.30 behavior), rr for round robin. (default cached-rr)
  -echo-debug-path URI
    	http echo server URI for debug, empty turns off that part (more secure) (default "/debug")
  -echo-server-default-params value
    	Default parameters/querystring to use if there isn't one provided explicitly. E.g "status=404&delay=3s"
  -gomaxprocs int
    	Setting for runtime.GOMAXPROCS, <1 doesn't change the default
  -grpc
    	Use GRPC (health check by default, add -ping for ping) for load testing
  -grpc-max-streams uint
    	MaxConcurrentStreams for the grpc server. Default (0) is to leave the option unset.
  -grpc-ping-delay duration
    	grpc ping delay in response
  -grpc-port port
    	grpc server port. Can be in the form of host:port, ip:port or port or /unix/domain/path or "disabled" to not start the grpc server. (default "8079")
  -h	Print usage/help on stdout
  -h2
    	Attempt to use http2.0 / h2 (instead of http 1.1) with stdclient and TLS
  -halfclose
    	When not keepalive, whether to half close the connection (only for fast http)
  -health
    	grpc ping client mode: use health instead of ping
  -healthservice string
    	which service string to pass to health check
  -http-port port
    	http echo server port. Can be in the form of host:port, ip:port, port or /unix/domain/path or "disabled". (default "8080")
  -http1.0
    	Use http1.0 (instead of http 1.1)
  -httpbufferkb kbytes
    	Size of the buffer (max data size) for the optimized http client in kbytes (default 128)
  -httpccch
    	Check for Connection: Close Header
  -https-insecure
    	Long form of the -k flag
  -jitter
    	set to true to de-synchronize parallel clients' by 10%
  -json path
    	Json output to provided file path or '-' for stdout (empty = no json output, unless -a is used)
  -k	Do not verify certs in https/tls/grpc connections
  -keepalive
    	Keep connection alive (only for fast http 1.1) (default true)
  -key Path
    	Path to the key file matching the -cert
  -labels string
    	Additional config data/labels to add to the resulting JSON, defaults to target URL and hostname
  -log-errors
    	Log http non 2xx/418 error codes as they occur (default true)
  -logcaller
    	Logs filename and line number of callers to log (default true)
  -logfatalpanics
    	If true, log.Fatal will panic (stack trace) instead of just exit 1 (default true)
  -loglevel value
    	loglevel, one of [Debug Verbose Info Warning Error Critical Fatal] (default Info)
  -logprefix string
    	Prefix to log lines before logged messages (default "> ")
  -max-echo-delay value
    	Maximum sleep time for delay= echo server parameter. dynamic flag. (default 1.5s)
  -maxpayloadsizekb Kbytes
    	MaxPayloadSize is the maximum size of payload to be generated by the EchoHandler size= argument. In Kbytes. (default 256)
  -multi-mirror-origin
    	Mirror the request url to the target for multi proxies (-M) (default true)
  -multi-serial-mode
    	Multi server (-M) requests one at a time instead of parallel mode
  -n int
    	Run for exactly this number of calls instead of duration. Default (0) is to use duration (-t). Default is 1 when used as grpc ping count.
  -nc-dont-stop-on-eof
    	in netcat (nc) mode, don't abort as soon as remote side closes
  -no-reresolve
    	Keep the initial DNS resolution and don't re-resolve when making new connections (because of error or reuse limit reached)
  -nocatchup
    	set to exact fixed qps and prevent fortio from trying to catchup when the target fails to keep up temporarily
  -offset duration
    	Offset of the histogram data
  -p string
    	List of pXX to calculate (default "50,75,90,99,99.9")
  -payload string
    	Payload string to send along
  -payload-file path
    	File path to be use as payload (POST for http), replaces -payload when set.
  -payload-size int
    	Additional random payload size, replaces -payload when set > 0, must be smaller than -maxpayloadsizekb. Setting this switches http to POST.
  -ping
    	grpc load test: use ping instead of health
  -profile file
    	write .cpu and .mem profiles to file
  -proxy-all-headers
    	Determines if only tracing or all headers (and cookies) are copied from request on the fetch2 ui/server endpoint (default true)
  -qps float
    	Queries Per Seconds or 0 for no wait/max qps (default 8)
  -quiet
    	Quiet mode: sets the loglevel to Error and reduces the output.
  -r float
    	Resolution of the histogram lowest buckets in seconds (default 0.001)
  -redirect-port port
    	Redirect all incoming traffic to https URL (need ingress to work properly). Can be in the form of host:port, ip:port, port or "disabled" to disable the feature. (default "8081")
  -resolve IP
    	Resolve host name to this IP
  -resolve-ip-type type
    	Resolve type: ip4 for ipv4, ip6 for ipv6 only, use ip for both (default ip4)
  -runid int
    	Optional RunID to add to json result and auto save filename, to match server mode
  -s int
    	Number of streams per grpc connection (default 1)
  -sequential-warmup
    	http(s) runner warmup done in parallel instead of sequentially. When set, restores pre 1.21 behavior
  -server-idle-timeout value
    	Default IdleTimeout for servers (default 30s)
  -static-dir path
    	Deprecated/unused path.
  -stdclient
    	Use the slower net/http standard client (slower but supports h2)
  -sync URL
    	index.tsv or s3/gcs bucket xml URL to fetch at startup for server modes.
  -sync-interval duration
    	Refresh the url every given interval (default, no refresh)
  -t duration
    	How long to run the test or 0 to run until ^C (default 5s)
  -tcp-port port
    	tcp echo server port. Can be in the form of host:port, ip:port, port or /unix/domain/path or "disabled". (default "8078")
  -timeout duration
    	Connection and read timeout value (for http) (default 3s)
  -udp-async
    	if true, udp echo server will use separate go routine to reply
  -udp-port port
    	udp echo server port. Can be in the form of host:port, ip:port, port or "disabled". (default "8078")
  -udp-timeout duration
    	Udp timeout (default 750ms)
  -ui-path URI
    	http server URI for UI, empty turns off that part (more secure) (default "/fortio/")
  -uniform
    	set to true to de-synchronize parallel clients' requests uniformly
  -unix-socket path
    	Unix domain socket path to use for physical connection
  -user user:password
    	User credentials for basic authentication (for http). Input data format should be user:password
```
