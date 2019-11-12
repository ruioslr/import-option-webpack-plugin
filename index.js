const get = require('lodash.get');

const PLUGIN_NAME = 'import-option-webpack-plugin'

const mtpl = function(tpl, data) {
    var re = /{{(.+?)}}/g;
    while((match = re.exec(tpl))!==null) {
        if(match[1]){
            tpl = tpl.replace(match[0], get(data,match[1]));
        }else{
            tpl = tpl.replace(match[0], '')
        }    
    }
    return tpl
}



module.exports = class ImportOptionWebpackPlugin {
  
    constructor(options) {
      this.options = options;
    }
  
    apply(resolver) {
      resolver.getHook('described-resolve').tapAsync(PLUGIN_NAME, (request, resolveContext, callback) => {
        const innerRequest = request.request || request.path;
        const reg = /{{(.+?)}}/;

        if(reg.test(innerRequest)){
            request = {
                ...request,
                request: mtpl(innerRequest, this.options),
            }
            return resolver.doResolve('resolve', request, `${PLUGIN_NAME} done`, resolveContext, callback);
        }
        return callback();
      });
    }
    
  }