let pkgs = import <nixpkgs> { };
in pkgs.mkShell {
  packages = with pkgs; [
    nodejs

    nodePackages.live-server

    python3

    python3Packages.tqdm

    (with python3Packages;
      buildPythonPackage rec {
        pname = "mistralai";
        version = "1.6.0";

        src = fetchPypi {
          inherit pname version;
          hash = "sha256-Bha1W2lIcfCn0aQoOlPLkECJ3n+/ysHSwEcNHHfvh50=";
        };

        pyproject = true;

        nativeBuildInputs = [ wheel poetry-core ];

        propagatedBuildInputs = [
          httpx
          eval-type-backport
          pydantic
          python-dateutil
          typing-inspection
        ];

        pythonImportsCheck = [ "mistralai" ];
      })

    (with python3Packages;
      buildPythonPackage rec {
        pname = "waterloo-open-data-api-client";
        version = "3";

        src = stdenv.mkDerivation {
          pname = "waterloo-open-data-api-client-src";
          inherit version;

          src = fetchurl {
            url = "https://openapi.data.uwaterloo.ca/swagger/v1/swagger.json";
            hash = "sha256-YBaD1HbA4AFrzBjE5HrYYC0o/BxcCmqWVVPcjy+EHVc=";
          };

          dontUnpack = true;

          nativeBuildInputs = [ openapi-python-client ];

          buildPhase =
            "openapi-python-client generate --path $src --output-path $out";
        };

        pyproject = true;

        nativeBuildInputs = [ wheel poetry-core ];

        propagatedBuildInputs = [ httpx attrs python-dateutil ];

        pythonImportsCheck = [ "waterloo_open_data_api_client" ];
      })
  ];
}
