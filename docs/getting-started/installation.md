---
sidebar_position: 1
---

# Installation

Fortio can be installed and used on basically any platform/method.

## Docker

We publish a multi architecture docker image (linux/amd64, linux/arm64, linux/ppc64le, linux/s390x): `fortio/fortio`.

### Examples

Server:
```
docker run -p 8080:8080 -p 8079:8079 fortio/fortio server &
```

Simple test run:
```
docker run fortio/fortio load http://www.google.com/
```


## From source

1. [Install go](https://golang.org/doc/install) (golang 1.18 or later)
2. `go install fortio.org/fortio@latest`
3. you can now run `fortio` (from your gopath bin/ directory, usually `~/go/bin`)

The [releases](https://github.com/fortio/fortio/releases) page has binaries for many OS/architecture combinations (see assets):

```shell
curl -L https://github.com/fortio/fortio/releases/download/v1.40.1/fortio-linux_amd64-1.40.1.tgz \
 | sudo tar -C / -xvzpf -
# or the debian package
wget https://github.com/fortio/fortio/releases/download/v1.40.1/fortio_1.40.1_amd64.deb
dpkg -i fortio_1.40.1_amd64.deb
# or the rpm
rpm -i https://github.com/fortio/fortio/releases/download/v1.40.1/fortio-1.40.1-1.x86_64.rpm
# and more, see assets in release page
```

## MacOS

On a MacOS you can also install Fortio using [Homebrew](https://brew.sh/):

```shell
brew install fortio
```

## Windows

On Windows, download https://github.com/fortio/fortio/releases/download/v1.40.1/fortio_win_1.40.1.zip and extract `fortio.exe` to any location, then using the Windows Command Prompt:
```
fortio.exe server
```
(at the prompt, allow the windows firewall to let connections in)

Once `fortio server` is running, you can visit its web UI at [http://localhost:8080/fortio/](http://localhost:8080/fortio/)

You can get a preview of the reporting/graphing UI at [https://demo.fortio.org](https://demo.fortio.org)
<!--
and on [istio.io/docs/performance-and-scalability/synthetic-benchmarks/](https://istio.io/docs/performance-and-scalability/synthetic-benchmarks/)
-->
