{
  description = "flake providing a development shell for the Create React App project (Node + yarn)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        node = pkgs.nodejs_24;
      in {
        devShells.default = pkgs.mkShell {
          name = "matura-angielski-dev-shell";

          buildInputs = with pkgs; [
            node
            yarn
            bun
            git
            gnumake
            coreutils
            which
          ];

          shellHook = ''
            export NPM_CONFIG_USERCONFIG="$PWD/.npmrc"
            if [ -f package.json ]; then
              echo "Project detected: package.json found"
            fi
            echo "Node: $(node --version 2>/dev/null || echo \"(not found)\")"
            echo "yarn: $(yarn --version 2>/dev/null || echo \"(not found)\")"
            echo "bun: $(bun --version 2>/dev/null || echo \"(not found)\")"
            echo "To start developing: run 'yarn' to install deps, then 'yarn start'"
          '';
        };

        packages.default = pkgs.stdenv.mkDerivation {
          name = "matura-angielski-noop";
          src = null;
          buildCommand = "mkdir -p $out && echo 'noop' > $out/README";
        };
      }
    );
}
