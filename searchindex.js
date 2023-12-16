Search.setIndex({"docnames": ["getting-started/argument-memory-config", "getting-started/argument-network-config", "getting-started/argument-system-config", "getting-started/argument-workload-config", "getting-started/astra-sim-output", "getting-started/getting-started", "getting-started/installing-astra-sim", "getting-started/running-astra-sim", "getting-started/setup", "index", "memory-backend/analytical-memory-backend", "memory-backend/memory-backend", "network-backend/analytical-network-backend", "network-backend/garnet-network-backend", "network-backend/network-backend", "network-backend/ns3-network-backend", "system-layer/overview", "system-layer/system-layer", "validation/hardware/gpu-validation", "validation/hardware/tpu-validation", "validation/validation"], "filenames": ["getting-started/argument-memory-config.md", "getting-started/argument-network-config.md", "getting-started/argument-system-config.md", "getting-started/argument-workload-config.md", "getting-started/astra-sim-output.md", "getting-started/getting-started.md", "getting-started/installing-astra-sim.md", "getting-started/running-astra-sim.md", "getting-started/setup.md", "index.md", "memory-backend/analytical-memory-backend.md", "memory-backend/memory-backend.md", "network-backend/analytical-network-backend.md", "network-backend/garnet-network-backend.md", "network-backend/network-backend.md", "network-backend/ns3-network-backend.md", "system-layer/overview.md", "system-layer/system-layer.md", "validation/hardware/gpu-validation.md", "validation/hardware/tpu-validation.md", "validation/validation.md"], "titles": ["Argument ${MEMORY_CONFIG}", "Argument ${NETWORK_CONFIG}", "Argument ${SYSTEM_CONFIG}", "Argument ${WORKLOAD_CONFIG}", "ASTRA-sim Output", "Getting Started", "Build ASTRA-sim", "Run ASTRA-sim", "Dependencies Setup", "Welcome to ASTRA-sim\u2019s documentation!", "Analytical Memory Backend", "Memory Backend", "Analytical Network Backend", "Garnet Network Backend", "Network Backend", "ns-3 Network Backend", "Overview", "System Layer", "Validation on GPU Systems - NCCL over HPE ProLiant Gen10", "Validation on Google\u2019s TPU-v3", "Validation"], "terms": {"configur": [0, 1, 2, 3, 7, 8], "path": [0, 1, 2, 3, 8], "file": [0, 1, 2, 3], "exampl": [0, 1, 2, 3], "can": [0, 1, 2, 3, 8], "found": [0, 1, 2, 3], "astra_sim": [0, 1, 2, 3, 7], "input": [0, 1, 2, 3], "remote_memori": [0, 3], "type": [0, 1, 2, 7], "string": [0, 1], "no_memory_expans": [0, 3], "per_node_memory_expans": 0, "per_npu_memory_expans": 0, "memory_pool": 0, "remot": [0, 3, 7], "mem": [0, 3], "latenc": [0, 1, 18, 19], "uint": [0, 1], "n": [0, 1, 2, 8, 9, 14], "bw": [0, 3], "bandwidth": [0, 1, 3, 4], "gb": [0, 1, 3, 18, 19], "": [0, 1, 3, 16, 18, 20], "b": [0, 1], "num": [0, 1], "node": [0, 1, 3, 4, 20], "int": [0, 1, 2], "number": [0, 1, 2, 3, 18], "onli": [0, 1, 2, 3], "valid": [0, 3, 9], "npu": [0, 1, 2, 3, 18], "per": [0, 1, 2, 19], "topologi": [1, 2, 3], "name": [1, 3], "put": 1, "hierarch": 1, "dimens": [1, 2, 3, 4], "count": [1, 4], "each": [1, 2, 3, 16, 18, 19], "below": [1, 3, 4, 8], "i": [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20], "repres": [1, 16], "an": [1, 2, 3, 8], "arrai": [1, 19], "size": [1, 2, 3, 19], "index": [1, 3, 4], "level": [1, 16], "dim": 1, "ring": [1, 2, 3, 4, 18, 19], "fullyconnect": [1, 3], "switch": [1, 3, 4], "tile": 1, "packag": [1, 8], "pod": 1, "unit": 1, "gpu": [1, 3, 9, 20], "link": [1, 4, 18, 19], "nic": [1, 4], "router": 1, "hbm": 1, "memori": [1, 3, 5, 7, 9], "scale": [1, 12], "factor": [1, 19], "total": [1, 3, 4], "we": [1, 2, 3, 8], "ar": [1, 2, 8, 16, 19], "simul": [1, 3, 7, 9, 11, 12, 14], "could": 1, "contain": 1, "one": [1, 2, 3, 11, 16], "multipl": [1, 2, 16], "row": 1, "defin": [1, 2, 3], "vertic": 1, "nv_switch": 1, "torus3d": 1, "determin": 1, "physic": [1, 2], "local": [1, 3, 4, 8], "intra": [1, 2], "inter": [1, 2, 4], "applic": 1, "horizont": 1, "alltoal": [1, 2], "dimesnion": [1, 2], "flit": 1, "width": 1, "The": [1, 2, 3, 4, 16], "bit": 1, "packet": 1, "pcakg": 1, "byte": 1, "vc": 1, "vnet": 1, "rout": 1, "algorithm": [1, 2, 18, 19], "ring_xi": 1, "delai": [1, 2], "cycl": [1, 2, 3, 4, 9], "buffer": 1, "v": 1, "term": [1, 2], "effici": [1, 9], "float": [1, 3], "ratio": 1, "data": [1, 3], "header": 1, "system": [2, 3, 7, 8, 9, 16, 20], "schedul": 2, "polici": 2, "lifo": 2, "fifo": 2, "order": [2, 16], "prorit": 2, "collect": [2, 17, 20], "accord": 2, "base": [2, 5, 7, 19], "time": [2, 16, 19], "arriv": 2, "mean": 2, "most": [2, 12], "recent": 2, "creat": [2, 3, 6, 8], "have": [2, 3, 6, 8], "higher": 2, "prioriti": 2, "while": [2, 3], "revers": 2, "scf": 2, "chunk": 2, "insid": 2, "least": 2, "smallest": 2, "baselin": 2, "themi": 2, "across": [2, 9], "alwai": 2, "us": [2, 5, 7, 16], "constant": 2, "all": [2, 3, 6, 8, 12, 19, 20], "issu": 2, "load": 2, "endpoint": 2, "spend": 2, "process": 2, "messag": 2, "after": [2, 3], "receiv": 2, "activ": [2, 8, 9], "thi": [2, 3, 8, 10, 11, 12, 13, 14, 15, 16, 20], "correspond": [2, 3], "maximum": 2, "like": 2, "execut": [2, 5, 7, 16], "parallel": 2, "logic": [2, 3], "prefer": 2, "dataset": 2, "split": 2, "divid": 2, "reduc": [2, 19, 20], "implement": [2, 17], "dimension0collective_dimension1collective_xxx_dimensionncollect": 2, "here": [2, 8, 9], "multiphas": 2, "colect": 2, "directli": 2, "specifi": [2, 3], "avail": 2, "option": [2, 3, 5, 8], "direct": 2, "doublebinarytre": 2, "oner": 2, "onedirect": 2, "For": [2, 3, 6, 7, 8, 16, 18], "ring_doublebinarytre": 2, "2": [2, 3, 4, 16, 19, 20], "perform": [2, 3], "first": [2, 3, 16, 18], "follow": [2, 3, 16], "doubl": 2, "binari": [2, 7], "tree": 2, "second": [2, 3], "pattern": 2, "henc": 2, "should": [2, 8], "equal": 2, "except": 2, "where": [2, 3], "assum": 2, "matter": 2, "how": [2, 3], "mani": 2, "big": 2, "connect": [2, 18, 19], "perfrom": 2, "phase": [2, 16], "garnet": [2, 5, 7, 9, 14], "backend": [2, 3, 6, 7, 8, 9, 17, 18, 19], "version": [2, 8], "scatter": 2, "dimension0collectivealg_dimension1collectivealg_xxx_dimensionncollectivealg": 2, "same": 2, "gather": [2, 19], "optim": [2, 19], "localbwawar": 2, "allreduc": [2, 19], "handl": 2, "singl": [2, 3], "dimension": 2, "network": [2, 3, 5, 6, 7, 9, 17], "seri": 2, "from": [2, 3, 14, 16, 19], "dim1": 2, "dimn": 2, "1": [2, 3, 4, 8, 16, 20], "start": [2, 9, 16], "goe": 2, "next": [2, 3, 16], "default": [2, 3], "clock": 2, "period": 2, "1n": 2, "ghz": 2, "feq": 2, "valu": 2, "sy": [2, 3, 4, 16], "hh": 2, "One": 2, "chang": [2, 3], "ani": [2, 3], "It": [2, 9], "command": [2, 3, 8], "line": [2, 3], "paramet": 2, "later": [2, 3], "workload": [3, 7, 8], "prefix": 3, "rule": 3, "format": 3, "path_prefix": 3, "npu_id": 3, "et": 3, "tool": 3, "you": [3, 6, 8], "either": [3, 8], "function": [3, 16], "test": 3, "case": [3, 16], "cd": [3, 6], "extern": 3, "graph_frontend": 3, "pip3": [3, 8], "instal": [3, 6, 8], "python3": [3, 8], "m": 3, "num_npu": 3, "64": 3, "num_dim": 3, "To": 3, "run": [3, 5, 6, 8, 9, 16, 20], "one_comm_coll_node_allreduc": 3, "analyt": [3, 5, 6, 7, 9, 11, 14, 18, 19], "build": [3, 5, 7, 9], "astra_analyt": [3, 6, 7], "bin": [3, 7], "astrasim_analytical_congestion_unawar": 3, "json": 3, "yml": 3, "ns3": [3, 5, 6, 7, 8], "python2": [3, 8], "requir": [3, 6, 7, 8], "edit": 3, "script": 3, "astra_ns3": [3, 6], "sh": [3, 6], "r": [3, 19], "Or": 3, "altern": 3, "network_backend": 3, "waf": 3, "scratch": 3, "astrasimnetwork": 3, "mix": 3, "config": [3, 5, 7], "txt": 3, "sample_64nodes_1d": 3, "comm": 3, "empti": 3, "upon": 3, "complet": 3, "astra": [3, 5, 8, 11, 14, 20], "sim": [3, 5, 8, 11, 14, 20], "displai": 3, "took": 3, "0": [3, 4, 8], "finish": [3, 4, 8, 16], "50904": 3, "62": 3, "63": 3, "text": 3, "input_typ": 3, "input_filenam": 3, "resnet50_dataparallel": 3, "output_filenam": 3, "num_pass": 3, "similarli": [3, 16], "previou": [3, 16], "6749042": 3, "61": 3, "ad": [3, 4], "few": 3, "its": [3, 11, 14, 16], "cpu": 3, "thread": 3, "detail": [3, 16], "tweak": 3, "get": [3, 9], "elsewher": 3, "ll": 3, "throw": 3, "some": [3, 16], "guidelin": 3, "With": 3, "merg": 3, "enhanc": 3, "about": [3, 16], "feed": 3, "navig": 3, "param": 3, "submodul": [3, 6], "find": 3, "sampl": [3, 19], "handi": 3, "merger": 3, "train": [3, 9], "comput": 3, "python": [3, 8], "unzip": 3, "tar": [3, 8], "xzf": 3, "dlrm_kineto": 3, "gz": [3, 8], "dlrm_pytorch_et": 3, "now": [3, 8, 16], "fire": 3, "up": [3, 18], "leverag": 3, "alreadi": 3, "whip": 3, "loop": 3, "dlrm": 3, "8": [3, 20], "fuse": 3, "them": 3, "keep": 3, "talk": 3, "trace_link": 3, "py": 3, "dlrm_eg_0": 3, "worker0": 3, "exact": 3, "match": 3, "annot": 3, "enumer": 3, "dataload": 3, "_multiprocessingdataloaderit": 3, "__next__": 3, "dlrm_eg_1": 3, "worker1": 3, "dlrm_eg_2": 3, "worker2": 3, "dlrm_eg_3": 3, "worker3": 3, "dlrm_eg_4": 3, "worker4": 3, "dlrm_eg_5": 3, "worker5": 3, "dlrm_eg_6": 3, "worker6": 3, "dlrm_eg_7": 3, "worker7": 3, "mkdir": 3, "et_plu": 3, "mv": 3, "_plu": 3, "shuffl": 3, "over": [3, 9, 19, 20], "transform": 3, "good": 3, "almost": 3, "make": [3, 6, 8], "those": 3, "danc": 3, "prep": 3, "session": 3, "astrasim": [3, 16], "dlrm_eg_0_plu": 3, "dlrm_chakra": 3, "dlrm_eg_1_plu": 3, "dlrm_eg_2_plu": 3, "dlrm_eg_3_plu": 3, "3": [3, 4, 8, 9, 14, 16, 19, 20], "dlrm_eg_4_plu": 3, "4": [3, 4, 19, 20], "dlrm_eg_5_plu": 3, "5": [3, 8, 16], "dlrm_eg_6_plu": 3, "6": [3, 8, 16, 18], "dlrm_eg_7_plu": 3, "7": [3, 8, 18], "And": 3, "thing": 3, "come": 3, "end": [3, 16], "head": [3, 16], "back": 3, "home": 3, "root": 3, "directori": 3, "updat": [3, 8, 10, 11, 13, 14, 15, 16, 20], "vi": 3, "npus_count": 3, "just": [3, 16], "id": [3, 4], "offset": [3, 4], "1total": [3, 4], "13271344": 3, "14249000": 3, "support": [3, 8, 11, 14], "two": 3, "measur": [3, 20], "runtim": 3, "set": [3, 16], "field": 3, "addition": [3, 16], "sec": 3, "peak": 3, "tflop": 3, "50": 3, "perf": 3, "2000": 3, "when": [3, 16], "ensur": [3, 19], "includ": 3, "point": [3, 16], "oper": [3, 18, 19], "tensor": 3, "pass": [3, 7], "If": [3, 8], "do": 3, "A": [3, 16], "communicator_group_id": 3, "gpu_id": 3, "print": [4, 19], "termin": 4, "shown": 4, "costmodel": 4, "25": [4, 18], "radix": 4, "cost": 4, "400": 4, "1300": 4, "646570": 4, "depend": [5, 9], "setup": [5, 9, 20], "debian": 5, "linux": 5, "distribut": [5, 9, 12], "maco": 5, "homebrew": 5, "window": 5, "clone": 5, "repositori": 5, "docker": [5, 8], "compil": [5, 8, 19], "program": [5, 8], "argument": [5, 7], "workload_config": [5, 7], "trace": [5, 7], "gener": [5, 7], "et_gener": [5, 7], "convert": [5, 7], "et_convert": [5, 7], "chakra": [5, 7, 8], "kineto": [5, 7], "By": [5, 7], "pytorch": [5, 7], "enabl": [5, 7, 9], "rooflin": [5, 7], "model": [5, 7, 9, 11, 12, 14, 18, 19], "commun": [5, 7, 14], "group": [5, 7], "system_config": [5, 7], "network_config": [5, 7], "memory_config": [5, 7], "output": [5, 9], "pleas": [6, 9, 10, 11, 12, 13, 14, 15, 16, 20], "sure": 6, "depenc": 6, "git": [6, 8], "recurs": 6, "github": [6, 8], "com": [6, 16], "imag": [6, 16], "t": 6, "c": 6, "onc": 7, "built": 7, "locat": [7, 8], "analyticalastra": 7, "arugu": 7, "addit": 7, "mai": [7, 16], "sudo": 8, "apt": 8, "gcc": 8, "g": 8, "cmake": 8, "libboost": 8, "dev": 8, "libprotobuf": 8, "protobuf": 8, "pip": 8, "also": 8, "becaus": 8, "older": 8, "recommend": [8, 20], "virtual": 8, "environ": 8, "isol": 8, "instanc": 8, "even": 8, "still": 8, "through": [8, 12], "conda": 8, "manag": [8, 17], "new": [8, 16], "graphviz": 8, "pydot": 8, "nativ": 8, "upgrad": 8, "brew": 8, "boost": 8, "coreutil": 8, "Then": 8, "download": 8, "j": 8, "nproc": 8, "check": 8, "successfulli": 8, "regist": 8, "which": [8, 16], "protoc": 8, "abl": 8, "moment": 8, "suggest": 8, "subsystem": 8, "wsl": 8, "accur": 9, "develop": 9, "intel": 9, "meta": 9, "georgia": 9, "tech": 9, "systemat": 9, "studi": 9, "challeng": 9, "modern": 9, "deep": 9, "learn": 9, "allow": 9, "explor": 9, "bottleneck": 9, "methodologi": 9, "larg": [9, 12], "dnn": 9, "divers": 9, "futur": 9, "platform": [9, 12], "concis": 9, "visual": 9, "summari": 9, "our": 9, "layer": [9, 16], "overview": [9, 14, 17], "nccl": [9, 19, 20], "hpe": [9, 20], "proliant": [9, 20], "gen10": [9, 20], "googl": [9, 20], "tpu": [9, 20], "v3": [9, 20], "project": 9, "current": [9, 10, 11, 13, 14, 15, 16, 20], "under": [9, 10, 11, 13, 14, 15, 16, 20], "stai": [9, 10, 11, 13, 14, 15, 16, 20], "tune": [9, 10, 11, 13, 14, 15, 16, 20], "page": [10, 11, 12, 13, 14, 15, 16, 20], "construct": [10, 11, 13, 14, 15, 16, 20], "behavior": [12, 16], "simpl": 12, "mathemat": 12, "equat": 12, "therefor": 12, "suitabl": 12, "refer": [12, 16], "more": [12, 18], "three": 14, "gem5": 14, "document": 14, "describ": 16, "basic": 16, "mechan": 16, "veri": 16, "high": 16, "omit": 16, "simplifi": 16, "clear": 16, "deliveri": 16, "codebas": 16, "email": 16, "user": 16, "mail": 16, "list": 16, "googlegroup": 16, "anyth": 16, "remain": 16, "unclear": 16, "core": 16, "call": [16, 19], "active_stream": 16, "hold": 16, "streambaselin": 16, "object": 16, "depict": 16, "top": 16, "right": 16, "corner": 16, "stream": 16, "e": 16, "consist": 16, "variabl": 16, "phases_to_go": 16, "pointer": 16, "my_current_phas": 16, "being": 16, "proceed_to_next_vnet_baselin": 16, "critic": 16, "advanc": 16, "move": 16, "between": 16, "anoth": 16, "possibl": 16, "ha": [16, 18], "been": 16, "remov": 16, "ready_list": 16, "insert": 16, "readi": 16, "wait": 16, "last": 16, "let": 16, "look": 16, "In": 16, "abov": 16, "pink": 16, "circl": 16, "eras": 16, "realli": 16, "note": 16, "thei": 16, "modifi": 16, "pop": 16, "insert_stream": 16, "notify_stream_remov": 16, "stream_point": 16, "frontmost": 16, "mark": 16, "blue": 16, "init": 16, "notify_stream_ad": 16, "trigger": 16, "other": 16, "subset": 16, "step": 16, "proceed_to_next": 16, "initi": 16, "At": 16, "delet": 16, "d": 16, "notify_stream_finish": 16, "notifi": 16, "section": 16, "foreword": 17, "queue": 17, "interfac": 17, "nvlink": 18, "bidirect": [18, 19], "reduct": [18, 19], "sum": [18, 19], "geomean": 18, "error": 18, "rate": 18, "11": 18, "9": 18, "hybrid": 18, "cube": 18, "mesh": [18, 19], "emper": 18, "extract": 18, "warm": 18, "smaller": 18, "vari": 18, "inform": 18, "contact": 18, "saeed": 18, "rashidi": 18, "gatech": 18, "edu": 18, "80": 19, "jax": 19, "u": 19, "research": 19, "team": 19, "2d": 19, "toru": 19, "sw": 19, "overhead": 19, "jit": 19, "lazi": 19, "dispatch": 19, "track": 19, "differr": 19, "iter": 19, "pmap": 19, "releas": 19, "code": 19, "import": 19, "numpi": 19, "jnp": 19, "size_of_allreduce_in_byt": 19, "128": 19, "10000": 19, "iterr": 19, "ss": 19, "num_devic": 19, "local_device_count": 19, "x": 19, "arang": 19, "x1": 19, "x2": 19, "f": 19, "nbyte": 19, "pmapped_fn": 19, "lambda": 19, "xx": 19, "lax": 19, "psum": 19, "axis_nam": 19, "start_tim": 19, "rang": 19, "end_tim": 19, "num_it": 19, "execution_tim": 19, "popul": 20, "result": 20, "compar": 20, "variou": 20, "real": 20, "senario": 20, "hardwar": 20, "practic": 20, "32": 20}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"argument": [0, 1, 2, 3], "memory_config": 0, "analyt": [0, 1, 10, 12], "memori": [0, 10, 11], "config": [0, 1], "network_config": 1, "network": [1, 12, 13, 14, 15, 16], "garnet": [1, 13], "ns3": 1, "system_config": 2, "workload_config": 3, "us": [3, 8], "execut": 3, "trace": 3, "gener": 3, "et_gener": 3, "convert": 3, "et_convert": 3, "chakra": 3, "kineto": 3, "By": 3, "pytorch": 3, "enabl": 3, "rooflin": 3, "model": 3, "commun": 3, "group": 3, "astra": [4, 6, 7, 9, 18, 19], "sim": [4, 6, 7, 9, 18, 19], "output": 4, "get": 5, "start": 5, "build": 6, "clone": 6, "repositori": 6, "docker": 6, "option": 6, "compil": 6, "program": 6, "run": [7, 18, 19], "depend": 8, "setup": [8, 18, 19], "debian": 8, "base": 8, "linux": 8, "distribut": 8, "maco": 8, "homebrew": 8, "window": 8, "welcom": 9, "": [9, 19], "document": [9, 12], "backend": [10, 11, 12, 13, 14, 15, 16], "overview": [12, 16], "n": 15, "3": [15, 18], "foreword": 16, "queue": 16, "manag": 16, "collect": [16, 18, 19], "implement": 16, "interfac": 16, "system": [17, 18], "layer": 17, "valid": [18, 19, 20], "gpu": 18, "nccl": 18, "over": 18, "hpe": 18, "proliant": 18, "gen10": 18, "senario": [18, 19], "1": [18, 19], "2": 18, "all": 18, "reduc": 18, "hardwar": [18, 19], "result": [18, 19], "4": 18, "8": [18, 19], "recommend": [18, 19], "practic": [18, 19], "googl": 19, "tpu": 19, "v3": 19, "node": 19, "32": 19}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Welcome to ASTRA-sim\u2019s documentation!": [[9, "welcome-to-astra-sim-s-documentation"]], "Dependencies Setup": [[8, "dependencies-setup"]], "Debian-Based Linux Distributions": [[8, "debian-based-linux-distributions"]], "macOS using homebrew": [[8, "macos-using-homebrew"]], "Windows": [[8, "windows"]], "Getting Started": [[5, "getting-started"]], "Run ASTRA-sim": [[7, "run-astra-sim"]], "Build ASTRA-sim": [[6, "build-astra-sim"]], "Clone Repository": [[6, "clone-repository"]], "Build with Docker (Optional)": [[6, "build-with-docker-optional"]], "Compile Program": [[6, "compile-program"]], "Garnet Network Backend": [[13, "garnet-network-backend"]], "Memory Backend": [[11, "memory-backend"]], "Analytical Memory Backend": [[10, "analytical-memory-backend"]], "Network Backend": [[14, "network-backend"]], "Analytical Network Backend": [[12, "analytical-network-backend"]], "Overview": [[12, "overview"], [16, "overview"]], "Documentation": [[12, "documentation"]], "Validation": [[20, "validation"]], "Argument ${WORKLOAD_CONFIG}": [[3, "argument-workload-config"]], "Using Execution Trace Generator (et_generator)": [[3, "using-execution-trace-generator-et-generator"]], "Using Execution Trace Converter (et_converter)": [[3, "using-execution-trace-converter-et-converter"]], "Using Chakra Execution Trace and Kineto Traces Generated By PyTorch": [[3, "using-chakra-execution-trace-and-kineto-traces-generated-by-pytorch"]], "Enable Roofline Models": [[3, "enable-roofline-models"]], "Enable Communicator Groups": [[3, "enable-communicator-groups"]], "Argument ${NETWORK_CONFIG}": [[1, "argument-network-config"]], "Analytical Network Config": [[1, "analytical-network-config"]], "Garnet Network Config": [[1, "garnet-network-config"]], "NS3 Network Config": [[1, "ns3-network-config"]], "Argument ${SYSTEM_CONFIG}": [[2, "argument-system-config"]], "Argument ${MEMORY_CONFIG}": [[0, "argument-memory-config"]], "Analytical Memory Config": [[0, "analytical-memory-config"]], "ASTRA-sim Output": [[4, "astra-sim-output"]], "Foreword": [[16, "foreword"]], "Queue Management": [[16, "queue-management"]], "Collective Implementation": [[16, "collective-implementation"]], "Interface with network backend": [[16, "interface-with-network-backend"]], "Validation on GPU Systems - NCCL over HPE ProLiant Gen10": [[18, "validation-on-gpu-systems-nccl-over-hpe-proliant-gen10"]], "Senario - 1: 2-GPUs All-Reduce": [[18, "senario-1-2-gpus-all-reduce"]], "Hardware Setup": [[18, "hardware-setup"], [18, "id1"], [18, "id5"], [19, "hardware-setup"], [19, "id1"]], "ASTRA-Sim setup": [[18, "astra-sim-setup"], [18, "id2"], [18, "id6"], [19, "astra-sim-setup"], [19, "id2"]], "Collectives run": [[18, "collectives-run"], [18, "id3"], [18, "id7"], [19, "collectives-run"], [19, "id3"]], "Results": [[18, "results"], [18, "id4"], [18, "id8"], [19, "results"], [19, "id4"]], "Senario - 2: 4-GPUs All-Reduce": [[18, "senario-2-4-gpus-all-reduce"]], "Senario - 3: 8-GPUs All-Reduce": [[18, "senario-3-8-gpus-all-reduce"]], "Recommended practices": [[18, "recommended-practices"], [19, "recommended-practices"]], "System Layer": [[17, "system-layer"]], "Validation on Google\u2019s TPU-v3": [[19, "validation-on-google-s-tpu-v3"]], "Senario - 1: v3-8 nodes": [[19, "senario-1-v3-8-nodes"]], "Senario - 1: v3-32 nodes": [[19, "senario-1-v3-32-nodes"]], "ns-3 Network Backend": [[15, "ns-3-network-backend"]]}, "indexentries": {}})