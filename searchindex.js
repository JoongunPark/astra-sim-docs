Search.setIndex({"docnames": ["compute-backend/compute-backend", "compute-backend/roofline-compute-backend", "compute-backend/scale-sim-compute-backend", "getting-started/argument-network-config", "getting-started/argument-remote-memory-config", "getting-started/argument-system-config", "getting-started/argument-workload-config", "getting-started/astra-sim-output", "getting-started/getting-started", "getting-started/installing-astra-sim", "getting-started/running-astra-sim", "getting-started/setup", "index", "network-backend/analytical-network-backend", "network-backend/garnet-network-backend", "network-backend/network-backend", "network-backend/ns3-network-backend", "remote-memory-backend/analytical-remote-memory-backend", "remote-memory-backend/remote-memory-backend", "system-layer/overview", "system-layer/system-layer", "validation/hardware/gpu-validation", "validation/hardware/tpu-validation", "validation/validation", "workload-layer/overview", "workload-layer/workload-layer"], "filenames": ["compute-backend/compute-backend.md", "compute-backend/roofline-compute-backend.md", "compute-backend/scale-sim-compute-backend.md", "getting-started/argument-network-config.md", "getting-started/argument-remote-memory-config.md", "getting-started/argument-system-config.md", "getting-started/argument-workload-config.md", "getting-started/astra-sim-output.md", "getting-started/getting-started.md", "getting-started/installing-astra-sim.md", "getting-started/running-astra-sim.md", "getting-started/setup.md", "index.md", "network-backend/analytical-network-backend.md", "network-backend/garnet-network-backend.md", "network-backend/network-backend.md", "network-backend/ns3-network-backend.md", "remote-memory-backend/analytical-remote-memory-backend.md", "remote-memory-backend/remote-memory-backend.md", "system-layer/overview.md", "system-layer/system-layer.md", "validation/hardware/gpu-validation.md", "validation/hardware/tpu-validation.md", "validation/validation.md", "workload-layer/overview.md", "workload-layer/workload-layer.md"], "titles": ["Compute Backend", "Roofline Compute Backend", "Scale-sim Compute Backend", "Argument ${NETWORK_CONFIG}", "Argument ${REMOTE_MEMORY_CONFIG}", "Argument ${SYSTEM_CONFIG}", "Argument ${WORKLOAD_CONFIG}", "ASTRA-sim Output", "Getting Started", "Build ASTRA-sim", "Run ASTRA-sim", "Dependencies Setup", "Welcome to ASTRA-sim\u2019s documentation!", "Analytical Network Backend", "Garnet Network Backend", "Network Backend", "ns-3 Network Backend", "Analytical Remote Memory Backend", "Remote Memory Backend", "Overview", "System Layer", "Validation on GPU Systems - NCCL over HPE ProLiant Gen10", "Validation on Google\u2019s TPU-v3", "Validation", "Overview", "Workload Layer"], "terms": {"thi": [0, 1, 2, 5, 11, 13, 14, 15, 16, 17, 18, 19, 23], "page": [0, 1, 2, 13, 14, 15, 16, 17, 18, 19, 23], "i": [0, 1, 2, 3, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24], "current": [0, 1, 2, 12, 14, 15, 16, 17, 18, 19, 23], "under": [0, 1, 2, 12, 14, 15, 16, 17, 18, 19, 23], "construct": [0, 1, 2, 14, 15, 16, 17, 18, 19, 23], "pleas": [0, 1, 2, 9, 12, 13, 14, 15, 16, 17, 18, 19, 23], "stai": [0, 1, 2, 12, 14, 15, 16, 17, 18, 19, 23], "tune": [0, 1, 2, 12, 14, 15, 16, 17, 18, 19, 23], "updat": [0, 1, 2, 11, 14, 15, 16, 17, 18, 19, 23], "astra": [0, 1, 6, 8, 11, 15, 18, 23], "sim": [0, 1, 6, 8, 11, 15, 18, 23], "support": [0, 1, 6, 11, 15, 18], "two": [0, 1, 6], "simul": [0, 3, 6, 10, 12, 13, 15, 18], "its": [0, 15, 18, 19], "model": [0, 12, 13, 15, 18, 21, 22], "scale": [0, 3, 12, 13], "rooflin": [0, 12], "enabl": [0, 8, 10, 12], "2": [1, 5, 6, 7, 19, 22, 23], "0": [1, 6, 7, 11], "perform": [1, 5], "measur": [1, 23], "runtim": 1, "you": [1, 6, 9, 11], "can": [1, 3, 4, 5, 6, 11], "set": [1, 19], "field": 1, "1": [1, 5, 6, 7, 11, 19, 23], "system": [1, 5, 6, 10, 11, 12, 19, 23], "configur": [1, 3, 4, 5, 6, 10, 11], "file": [1, 3, 4, 5, 6], "addition": [1, 19], "specifi": [1, 5, 6], "local": [1, 3, 7, 11], "memori": [1, 3, 6, 8, 10, 12], "bandwidth": [1, 3, 4, 7], "gb": [1, 3, 4, 21, 22], "sec": 1, "peak": 1, "tflop": 1, "mem": [1, 4], "bw": [1, 4], "50": 1, "perf": 1, "2000": 1, "when": [1, 19], "creat": [1, 5, 6, 9, 11], "execut": [1, 5, 8, 10, 19, 24], "trace": [1, 8, 10, 24], "ensur": [1, 22], "includ": [1, 6], "number": [1, 3, 4, 5, 6, 21], "float": [1, 3], "point": [1, 19], "oper": [1, 21, 22, 24], "tensor": 1, "size": [1, 3, 5, 22], "each": [1, 3, 5, 19, 21, 22], "path": [3, 4, 5, 6, 11], "exampl": [3, 4, 5, 6], "found": [3, 4, 5, 6], "astra_sim": [3, 4, 5, 6, 10], "input": [3, 4, 5, 6, 24], "topologi": [3, 5], "name": [3, 6], "string": [3, 4], "put": 3, "hierarch": 3, "dimens": [3, 5, 7], "count": [3, 7], "uint": [3, 4], "below": [3, 7, 11], "repres": [3, 19], "an": [3, 5, 6, 11, 24], "arrai": [3, 22], "index": [3, 7], "level": [3, 19], "per": [3, 4, 5, 22], "dim": 3, "ring": [3, 5, 7, 21, 22], "fullyconnect": 3, "switch": [3, 6, 7], "type": [3, 4, 5, 10], "tile": 3, "packag": [3, 11], "node": [3, 4, 7, 23], "pod": 3, "unit": 3, "gpu": [3, 6, 12, 23], "link": [3, 7, 21, 22], "latenc": [3, 4, 21, 22], "n": [3, 4, 5, 11, 12, 15], "": [3, 4, 19, 21, 23], "b": [3, 4], "nic": [3, 7], "router": 3, "hbm": 3, "factor": [3, 22], "num": [3, 4], "npu": [3, 4, 5, 21], "int": [3, 4, 5], "total": [3, 7], "we": [3, 5, 11], "ar": [3, 5, 11, 19, 22], "could": 3, "contain": 3, "one": [3, 5, 18, 19], "multipl": [3, 5, 19], "row": 3, "defin": [3, 5], "vertic": 3, "nv_switch": 3, "torus3d": 3, "determin": 3, "physic": [3, 5], "intra": [3, 5], "inter": [3, 5, 7], "applic": 3, "onli": [3, 4, 5], "horizont": 3, "alltoal": [3, 5], "dimesnion": [3, 5], "flit": 3, "width": 3, "The": [3, 5, 6, 7, 19, 24], "bit": 3, "packet": 3, "pcakg": 3, "byte": 3, "vc": 3, "vnet": 3, "rout": 3, "algorithm": [3, 5, 21, 22], "ring_xi": 3, "delai": [3, 5], "cycl": [3, 5, 6, 7], "buffer": 3, "v": 3, "term": [3, 5], "effici": [3, 12], "ratio": 3, "data": 3, "header": 3, "remote_memori": [4, 6], "no_memory_expans": [4, 6], "per_node_memory_expans": 4, "per_npu_memory_expans": 4, "memory_pool": 4, "valid": [4, 6, 12], "schedul": [5, 24], "polici": 5, "lifo": 5, "fifo": 5, "order": [5, 19], "prorit": 5, "collect": [5, 20, 23], "accord": 5, "base": [5, 8, 10, 22], "time": [5, 19, 22], "arriv": 5, "mean": 5, "most": [5, 13], "recent": 5, "have": [5, 9, 11], "higher": 5, "prioriti": 5, "while": 5, "revers": 5, "scf": 5, "chunk": 5, "insid": 5, "least": 5, "smallest": 5, "baselin": 5, "themi": 5, "across": [5, 12], "alwai": 5, "us": [5, 8, 10, 19], "constant": 5, "all": [5, 6, 9, 11, 13, 22, 23], "issu": [5, 24], "load": 5, "endpoint": 5, "spend": 5, "process": 5, "messag": 5, "after": 5, "receiv": [5, 24], "activ": [5, 11, 12], "correspond": 5, "maximum": 5, "like": 5, "parallel": 5, "logic": 5, "prefer": 5, "dataset": 5, "split": 5, "divid": 5, "reduc": [5, 22, 23], "implement": [5, 20], "dimension0collective_dimension1collective_xxx_dimensionncollect": 5, "here": [5, 11, 12], "multiphas": 5, "colect": 5, "directli": 5, "avail": [5, 24], "option": [5, 8, 11], "direct": 5, "doublebinarytre": 5, "oner": 5, "onedirect": 5, "For": [5, 6, 9, 10, 11, 19, 21], "ring_doublebinarytre": 5, "first": [5, 6, 19, 21], "follow": [5, 6, 19], "doubl": 5, "binari": [5, 10], "tree": 5, "second": [5, 6], "pattern": 5, "henc": 5, "should": [5, 11], "equal": 5, "except": 5, "where": 5, "assum": 5, "matter": 5, "how": [5, 6], "mani": 5, "big": [5, 25], "connect": [5, 21, 22], "perfrom": 5, "phase": [5, 19], "garnet": [5, 8, 10, 12, 15], "backend": [5, 9, 10, 11, 12, 20, 21, 22], "version": [5, 11], "scatter": 5, "dimension0collectivealg_dimension1collectivealg_xxx_dimensionncollectivealg": 5, "same": 5, "gather": [5, 22], "optim": [5, 22], "localbwawar": 5, "allreduc": [5, 22], "handl": 5, "singl": [5, 6], "dimension": 5, "network": [5, 6, 8, 9, 10, 12, 20], "seri": 5, "from": [5, 6, 15, 19, 22], "dim1": 5, "dimn": 5, "start": [5, 12, 19], "goe": 5, "next": [5, 19, 24], "default": [5, 6], "clock": 5, "period": 5, "1n": 5, "ghz": 5, "feq": 5, "valu": 5, "sy": [5, 6, 7, 19], "hh": 5, "One": 5, "chang": 5, "ani": 5, "It": [5, 12], "command": [5, 6, 11], "line": 5, "paramet": 5, "later": 5, "workload": [6, 10, 11, 12, 24], "prefix": 6, "rule": 6, "format": 6, "path_prefix": 6, "npu_id": 6, "et": 6, "layer": [6, 12, 19, 24], "gener": 6, "run": [6, 8, 9, 11, 12, 19, 23], "illustr": 6, "text": 6, "cd": [6, 9], "extern": 6, "graph_frontend": 6, "pip3": [6, 11], "instal": [6, 9, 11], "python3": [6, 11], "m": 6, "input_typ": 6, "input_filenam": 6, "resnet50_dataparallel": 6, "txt": 6, "output_filenam": 6, "num_npu": 6, "64": 6, "num_dim": 6, "num_pass": 6, "build": [6, 8, 10, 12], "astra_analyt": [6, 9, 10], "bin": [6, 10], "astrasim_analytical_congestion_unawar": 6, "json": 6, "analyt": [6, 8, 9, 10, 12, 15, 18, 21, 22], "yml": 6, "remot": [6, 8, 10, 12], "upon": 6, "complet": [6, 24], "displai": 6, "took": 6, "62": 6, "finish": [6, 7, 11, 19, 24], "6749042": 6, "61": 6, "63": 6, "pass": [6, 10], "comm": 6, "If": [6, 11], "do": 6, "A": [6, 19], "communicator_group_id": 6, "gpu_id": 6, "id": [6, 7], "3": [6, 7, 11, 12, 15, 19, 22, 23], "4": [6, 7, 22, 23], "7": [6, 11, 21], "5": [6, 11, 19], "6": [6, 11, 19, 21], "print": [7, 22], "termin": 7, "shown": 7, "costmodel": 7, "ad": 7, "25": [7, 21], "radix": 7, "cost": 7, "400": 7, "1300": 7, "offset": 7, "1total": 7, "646570": 7, "depend": [8, 12], "setup": [8, 12, 23], "debian": 8, "linux": 8, "distribut": [8, 12, 13], "maco": 8, "homebrew": 8, "window": 8, "clone": 8, "repositori": 8, "docker": [8, 11], "compil": [8, 11, 22], "program": [8, 11], "argument": [8, 10], "workload_config": [8, 10], "chakra": [8, 10, 11], "convert": [8, 10], "et_convert": [8, 10], "commun": [8, 10, 15, 24], "group": [8, 10], "system_config": [8, 10], "network_config": [8, 10], "config": [8, 10], "ns3": [8, 9, 10, 11], "remote_memory_config": [8, 10], "output": [8, 12], "make": [9, 11], "sure": 9, "requir": [9, 10, 11], "depenc": 9, "git": [9, 11], "recurs": 9, "submodul": 9, "github": [9, 11], "com": [9, 19], "imag": [9, 19], "t": 9, "sh": 9, "astra_ns3": 9, "c": 9, "onc": [10, 24], "built": 10, "locat": [10, 11], "analyticalastra": 10, "arugu": 10, "addit": 10, "mai": [10, 19], "sudo": 11, "apt": 11, "gcc": 11, "g": [11, 24], "cmake": 11, "libboost": 11, "dev": 11, "libprotobuf": 11, "protobuf": 11, "pip": 11, "python2": 11, "also": 11, "becaus": 11, "older": 11, "recommend": [11, 23], "virtual": 11, "environ": 11, "isol": 11, "python": 11, "instanc": 11, "even": 11, "still": 11, "now": [11, 19], "either": 11, "through": [11, 13, 24], "conda": 11, "manag": [11, 20], "new": [11, 19], "graphviz": 11, "pydot": 11, "nativ": 11, "upgrad": 11, "brew": 11, "boost": 11, "coreutil": 11, "Then": 11, "download": 11, "tar": 11, "gz": 11, "j": 11, "nproc": 11, "check": 11, "successfulli": 11, "regist": 11, "which": [11, 19], "protoc": 11, "abl": 11, "moment": 11, "suggest": 11, "subsystem": 11, "wsl": 11, "machin": 12, "learn": 12, "systemat": 12, "studi": 12, "challeng": 12, "modern": 12, "deep": 12, "allow": 12, "explor": 12, "bottleneck": 12, "develop": 12, "methodologi": 12, "larg": [12, 13], "dnn": 12, "divers": 12, "futur": 12, "platform": [12, 13], "concis": 12, "visual": 12, "summari": 12, "our": 12, "get": 12, "overview": [12, 15, 20, 25], "comput": [12, 24], "nccl": [12, 22, 23], "over": [12, 22, 23], "hpe": [12, 23], "proliant": [12, 23], "gen10": [12, 23], "googl": [12, 23], "tpu": [12, 23], "v3": [12, 23], "project": 12, "behavior": [13, 19], "simpl": 13, "mathemat": 13, "equat": 13, "therefor": 13, "suitabl": 13, "refer": [13, 19], "more": [13, 21], "three": 15, "gem5": 15, "document": 15, "describ": 19, "basic": 19, "mechan": 19, "veri": 19, "high": 19, "some": 19, "detail": 19, "omit": 19, "simplifi": 19, "clear": 19, "deliveri": 19, "codebas": 19, "email": 19, "user": 19, "mail": 19, "list": 19, "astrasim": 19, "googlegroup": 19, "anyth": 19, "remain": 19, "unclear": 19, "core": 19, "call": [19, 22], "active_stream": 19, "hold": 19, "streambaselin": 19, "object": [19, 24], "depict": 19, "top": 19, "right": 19, "corner": 19, "stream": 19, "e": [19, 24], "consist": 19, "variabl": 19, "phases_to_go": 19, "pointer": 19, "my_current_phas": 19, "being": 19, "function": 19, "proceed_to_next_vnet_baselin": 19, "critic": 19, "advanc": 19, "move": 19, "between": 19, "anoth": 19, "possibl": 19, "case": 19, "ha": [19, 21], "been": 19, "remov": 19, "ready_list": 19, "about": 19, "insert": 19, "readi": 19, "wait": 19, "last": 19, "let": 19, "look": 19, "In": 19, "abov": 19, "pink": 19, "circl": 19, "eras": 19, "realli": 19, "note": 19, "thei": 19, "modifi": 19, "pop": 19, "insert_stream": 19, "notify_stream_remov": 19, "head": 19, "previou": 19, "stream_point": 19, "frontmost": 19, "mark": 19, "blue": 19, "init": 19, "similarli": 19, "notify_stream_ad": 19, "trigger": 19, "other": 19, "subset": 19, "step": 19, "just": 19, "proceed_to_next": 19, "initi": 19, "At": 19, "delet": 19, "d": 19, "notify_stream_finish": 19, "notifi": 19, "end": 19, "section": 19, "foreword": 20, "queue": 20, "interfac": 20, "nvlink": 21, "bidirect": [21, 22], "reduct": [21, 22], "sum": [21, 22], "geomean": 21, "error": 21, "rate": 21, "11": 21, "9": 21, "hybrid": 21, "cube": 21, "mesh": [21, 22], "emper": 21, "extract": 21, "warm": 21, "up": 21, "smaller": 21, "vari": 21, "inform": 21, "contact": 21, "saeed": 21, "rashidi": 21, "gatech": 21, "edu": 21, "80": 22, "jax": 22, "u": 22, "research": 22, "team": 22, "2d": 22, "toru": 22, "sw": 22, "overhead": 22, "jit": 22, "lazi": 22, "dispatch": 22, "track": 22, "differr": 22, "iter": [22, 24], "pmap": 22, "releas": 22, "code": 22, "sampl": 22, "import": 22, "numpi": 22, "jnp": 22, "size_of_allreduce_in_byt": 22, "128": 22, "10000": 22, "iterr": 22, "ss": 22, "num_devic": 22, "local_device_count": 22, "x": 22, "arang": 22, "x1": 22, "x2": 22, "f": 22, "nbyte": 22, "pmapped_fn": 22, "lambda": 22, "xx": 22, "lax": 22, "psum": 22, "axis_nam": 22, "start_tim": 22, "rang": 22, "r": 22, "end_tim": 22, "num_it": 22, "execution_tim": 22, "popul": 23, "result": 23, "compar": 23, "variou": 23, "real": 23, "senario": 23, "hardwar": [23, 24], "8": 23, "practic": 23, "32": 23, "take": 24, "instanti": 24, "etfeed": 24, "help": 24, "manipul": 24, "event": 24, "issuabl": 24, "resourc": 24, "sent": 24, "begin": 24, "pictur": 25}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"comput": [0, 1, 2], "backend": [0, 1, 2, 13, 14, 15, 16, 17, 18, 19], "rooflin": 1, "enabl": [1, 6], "model": 1, "scale": 2, "sim": [2, 7, 9, 10, 12, 21, 22], "argument": [3, 4, 5, 6], "network_config": 3, "analyt": [3, 4, 13, 17], "network": [3, 13, 14, 15, 16, 19], "config": [3, 4], "garnet": [3, 14], "ns3": 3, "remote_memory_config": 4, "remot": [4, 17, 18], "memori": [4, 17, 18], "system_config": 5, "workload_config": 6, "us": [6, 11], "chakra": 6, "execut": 6, "trace": 6, "convert": 6, "et_convert": 6, "commun": 6, "group": 6, "astra": [7, 9, 10, 12, 21, 22], "output": 7, "get": 8, "start": 8, "build": 9, "clone": 9, "repositori": 9, "docker": 9, "option": 9, "compil": 9, "program": 9, "run": [10, 21, 22], "depend": 11, "setup": [11, 21, 22], "debian": 11, "base": 11, "linux": 11, "distribut": 11, "maco": 11, "homebrew": 11, "window": 11, "welcom": 12, "": [12, 22], "document": [12, 13], "overview": [13, 19, 24], "n": 16, "3": [16, 21], "foreword": 19, "queue": 19, "manag": 19, "collect": [19, 21, 22], "implement": 19, "interfac": 19, "system": [20, 21], "layer": [20, 25], "valid": [21, 22, 23], "gpu": 21, "nccl": 21, "over": 21, "hpe": 21, "proliant": 21, "gen10": 21, "senario": [21, 22], "1": [21, 22], "2": 21, "all": 21, "reduc": 21, "hardwar": [21, 22], "result": [21, 22], "4": 21, "8": [21, 22], "recommend": [21, 22], "practic": [21, 22], "googl": 22, "tpu": 22, "v3": 22, "node": 22, "32": 22, "big": 24, "pictur": 24, "workload": 25}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Run ASTRA-sim": [[10, "run-astra-sim"]], "Dependencies Setup": [[11, "dependencies-setup"]], "Debian-Based Linux Distributions": [[11, "debian-based-linux-distributions"]], "macOS using homebrew": [[11, "macos-using-homebrew"]], "Windows": [[11, "windows"]], "Build ASTRA-sim": [[9, "build-astra-sim"]], "Clone Repository": [[9, "clone-repository"]], "Build with Docker (Optional)": [[9, "build-with-docker-optional"]], "Compile Program": [[9, "compile-program"]], "Argument ${WORKLOAD_CONFIG}": [[6, "argument-workload-config"]], "Using Chakra Execution Trace": [[6, "using-chakra-execution-trace"]], "Using Execution Trace Converter (et_converter)": [[6, "using-execution-trace-converter-et-converter"]], "Enable Communicator Groups": [[6, "enable-communicator-groups"]], "ASTRA-sim Output": [[7, "astra-sim-output"]], "Getting Started": [[8, "getting-started"]], "Analytical Network Backend": [[13, "analytical-network-backend"]], "Overview": [[13, "overview"], [19, "overview"], [24, "overview"]], "Documentation": [[13, "documentation"]], "Garnet Network Backend": [[14, "garnet-network-backend"]], "Welcome to ASTRA-sim\u2019s documentation!": [[12, "welcome-to-astra-sim-s-documentation"]], "ns-3 Network Backend": [[16, "ns-3-network-backend"]], "Network Backend": [[15, "network-backend"]], "Analytical Remote Memory Backend": [[17, "analytical-remote-memory-backend"]], "Compute Backend": [[0, "compute-backend"]], "Scale-sim Compute Backend": [[2, "scale-sim-compute-backend"]], "Argument ${NETWORK_CONFIG}": [[3, "argument-network-config"]], "Analytical Network Config": [[3, "analytical-network-config"]], "Garnet Network Config": [[3, "garnet-network-config"]], "NS3 Network Config": [[3, "ns3-network-config"]], "Argument ${SYSTEM_CONFIG}": [[5, "argument-system-config"]], "Roofline Compute Backend": [[1, "roofline-compute-backend"]], "Enable Roofline Models": [[1, "enable-roofline-models"]], "Argument ${REMOTE_MEMORY_CONFIG}": [[4, "argument-remote-memory-config"]], "Analytical Remote Memory Config": [[4, "analytical-remote-memory-config"]], "System Layer": [[20, "system-layer"]], "Validation": [[23, "validation"]], "Remote Memory Backend": [[18, "remote-memory-backend"]], "Foreword": [[19, "foreword"]], "Queue Management": [[19, "queue-management"]], "Collective Implementation": [[19, "collective-implementation"]], "Interface with network backend": [[19, "interface-with-network-backend"]], "Validation on Google\u2019s TPU-v3": [[22, "validation-on-google-s-tpu-v3"]], "Senario - 1: v3-8 nodes": [[22, "senario-1-v3-8-nodes"]], "Hardware Setup": [[22, "hardware-setup"], [22, "id1"], [21, "hardware-setup"], [21, "id1"], [21, "id5"]], "ASTRA-Sim setup": [[22, "astra-sim-setup"], [22, "id2"], [21, "astra-sim-setup"], [21, "id2"], [21, "id6"]], "Collectives run": [[22, "collectives-run"], [22, "id3"], [21, "collectives-run"], [21, "id3"], [21, "id7"]], "Results": [[22, "results"], [22, "id4"], [21, "results"], [21, "id4"], [21, "id8"]], "Senario - 1: v3-32 nodes": [[22, "senario-1-v3-32-nodes"]], "Recommended practices": [[22, "recommended-practices"], [21, "recommended-practices"]], "Validation on GPU Systems - NCCL over HPE ProLiant Gen10": [[21, "validation-on-gpu-systems-nccl-over-hpe-proliant-gen10"]], "Senario - 1: 2-GPUs All-Reduce": [[21, "senario-1-2-gpus-all-reduce"]], "Senario - 2: 4-GPUs All-Reduce": [[21, "senario-2-4-gpus-all-reduce"]], "Senario - 3: 8-GPUs All-Reduce": [[21, "senario-3-8-gpus-all-reduce"]], "Workload Layer": [[25, "workload-layer"]], "Big Picture": [[24, "big-picture"]]}, "indexentries": {}})