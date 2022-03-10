var Module = { 
	onRuntimeInitialized: function () {
		MONO.mono_load_runtime_and_bcl (
			"managed",
			"managed",
			1,
			[ "Mono.Security.dll", "MonoGame.Framework.dll", "mscorlib.dll", "netstandard.dll", "Platformer2D.dll", "System.Core.dll", "System.dll", "System.Drawing.Common.dll", "System.Net.Http.dll", "System.Runtime.Serialization.dll", "System.ServiceModel.Internals.dll", "System.Xml.dll", "WebAssembly.Bindings.dll", "WebAssembly.Net.Http.dll", "WebAssembly.Net.WebSockets.dll", "WebGLDotNET.dll", "Mono.Security.pdb", "MonoGame.Framework.pdb", "mscorlib.pdb", "Platformer2D.pdb", "System.Core.pdb", "System.Drawing.Common.pdb", "System.Net.Http.pdb", "System.pdb", "System.Runtime.Serialization.pdb", "System.ServiceModel.Internals.pdb", "System.Xml.pdb", "WebAssembly.Bindings.pdb", "WebAssembly.Net.Http.pdb", "WebAssembly.Net.WebSockets.pdb" ],
			function () {
				App.init ();
			}
		);
	},
};


