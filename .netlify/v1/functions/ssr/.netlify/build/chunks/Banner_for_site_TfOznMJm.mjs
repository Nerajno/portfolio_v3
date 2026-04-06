const heroImage = new Proxy({"src":"/_astro/Banner_for_site.BRzAFL5-.png","width":499,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/assets/Banner_for_site.png";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
