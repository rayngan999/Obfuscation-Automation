/*! For license information please see 23.js.LICENSE.txt */
(window.webpackJsonppayroll_employee_portal_ui=window.webpackJsonppayroll_employee_portal_ui||[]).push([[23],{264:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var i,n=r(6),o=r.n(n),s=r(158);function u(){return i||(i=o.a.createContext({})),i}var a;!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(a||(a={}));var c=new Map;function p(t){var e;switch(t){case a.Query:e="Query";break;case a.Mutation:e="Mutation";break;case a.Subscription:e="Subscription"}return e}var l=r(44),h=r(18),b=r(231),v=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t,e){void 0===e&&(e=!1),e&&!Object(b.a)(this.options,t)&&(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;Object(s.a)(!!t,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.');var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=function(t){var e,r,i=c.get(t);if(i)return i;Object(s.a)(!!t&&!!t.kind,"Argument of "+t+" passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document");var n=t.definitions.filter((function(t){return"FragmentDefinition"===t.kind})),o=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"query"===t.operation})),u=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"mutation"===t.operation})),p=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"subscription"===t.operation}));Object(s.a)(!n.length||o.length||u.length||p.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"),Object(s.a)(o.length+u.length+p.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+t+" had "+o.length+" queries, "+p.length+" subscriptions and "+u.length+" mutations. You can use 'compose' to join multiple operation types to a component"),r=o.length?a.Query:a.Mutation,o.length||u.length||(r=a.Subscription);var l=o.length?o:u.length?u:p;Object(s.a)(1===l.length,"react-apollo only supports one definition per HOC. "+t+" had "+l.length+" definitions. You can use 'compose' to join multiple operation types to a component");var h=l[0];e=h.variableDefinitions||[];var b={name:h.name&&"Name"===h.name.kind?h.name.value:"data",type:r,variables:e};return c.set(t,b),b}(t),i=p(e),n=p(r.type);Object(s.a)(r.type===e,"Running a "+i+" requires a graphql "+i+", but a "+n+" was used instead.")},t}(),y=function(t){function e(e){var r=e.options,i=e.context,n=e.forceUpdate,o=t.call(this,r,i)||this;return o.previousData={},o.currentObservable={},o.runLazy=!1,o.runLazyQuery=function(t){o.cleanup(),o.runLazy=!0,o.lazyOptions=t,o.forceUpdate()},o.getExecuteResult=function(){var t=o.getQueryResult();return o.startQuerySubscription(),t},o.obsRefetch=function(t){return o.currentObservable.query.refetch(t)},o.obsFetchMore=function(t){return o.currentObservable.query.fetchMore(t)},o.obsUpdateQuery=function(t){return o.currentObservable.query.updateQuery(t)},o.obsStartPolling=function(t){o.currentObservable&&o.currentObservable.query&&o.currentObservable.query.startPolling(t)},o.obsStopPolling=function(){o.currentObservable&&o.currentObservable.query&&o.currentObservable.query.stopPolling()},o.obsSubscribeToMore=function(t){return o.currentObservable.query.subscribeToMore(t)},o.forceUpdate=n,o}return Object(l.b)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query;return(e||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:h.NetworkStatus.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this.getOptions();if(t.skip||!1===t.ssr)return!1;var e=this.currentObservable.query;return!!e.getCurrentResult().loading&&e.result()},e.prototype.afterExecute=function(t){var e=this,r=(void 0===t?{}:t).lazy,i=void 0!==r&&r;return this.isMounted=!0,i&&!this.runLazy||(this.handleErrorOrCompleted(),setTimeout((function(){e.currentObservable.query&&e.currentObservable.query.resetQueryStoreErrors()}))),this.previousOptions=this.getOptions(),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this);return this.lazyOptions&&(e.variables=Object(l.a)(Object(l.a)({},e.variables),this.lazyOptions.variables),e.context=Object(l.a)(Object(l.a)({},e.context),this.lazyOptions.context)),this.runLazy&&delete e.skip,e},e.prototype.getExecuteSsrResult=function(){var t,e=this.context&&this.context.renderPromises,r=!1===this.getOptions().ssr,i=this.refreshClient().client.disableNetworkFetches,n={loading:!0,networkStatus:h.NetworkStatus.loading,called:!0,data:void 0};return r&&(e||i)?n:(e&&(t=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult)||n),t)},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,a.Query);var e=t.displayName||"Query";return this.context&&this.context.renderPromises&&("network-only"===t.fetchPolicy||"cache-and-network"===t.fetchPolicy)&&(t.fetchPolicy="cache-first"),Object(l.a)(Object(l.a)({},t),{displayName:e,context:t.context,metadata:{reactComponent:{displayName:e}}})},e.prototype.initializeObservableQuery=function(){if(this.context&&this.context.renderPromises&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var t=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(l.a)(Object(l.a)({},t),{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(Object(l.a)({},t)),this.context&&this.context.renderPromises&&this.context.renderPromises.registerSSRObservable(this.currentObservable.query,t)}},e.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var t=Object(l.a)(Object(l.a)({},this.prepareObservableQueryOptions()),{children:null});Object(b.a)(t,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=t,this.currentObservable.query.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(){var t=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var e=this.currentObservable.query;this.currentObservable.subscription=e.subscribe({next:function(e){var r=e.loading,i=e.networkStatus,n=e.data,o=t.previousData.result;o&&o.loading===r&&o.networkStatus===i&&Object(b.a)(o.data,n)||t.forceUpdate()},error:function(e){if(t.resubscribeToQuery(),!e.hasOwnProperty("graphQLErrors"))throw e;var r=t.previousData.result;(r&&r.loading||!Object(b.a)(e,t.previousData.error))&&(t.previousData.error=e,t.forceUpdate())}})}},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable.query.getLastError(),e=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:t,lastResult:e})},e.prototype.getQueryResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=Object(l.a)(Object(l.a)({},t),{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),i=r.loading,n=r.partial,o=r.networkStatus,s=r.errors,u=r.error,a=r.data;if(s&&s.length>0&&(u=new h.ApolloError({graphQLErrors:s})),t=Object(l.a)(Object(l.a)({},t),{loading:i,networkStatus:o,error:u,called:!0}),i){var c=this.previousData.result&&this.previousData.result.data;t.data=c&&a?Object(l.a)(Object(l.a)({},c),a):c||a}else if(u)Object.assign(t,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var p=this.currentObservable.query.options.fetchPolicy;if(e.partialRefetch&&!a&&n&&"cache-only"!==p)return Object.assign(t,{loading:!0,networkStatus:h.NetworkStatus.loading}),t.refetch(),t;t.data=a}}return t.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=t,t},e.prototype.handleErrorOrCompleted=function(){var t=this.currentObservable.query;if(t){var e=t.getCurrentResult(),r=e.data,i=e.loading,n=e.error;if(!i){var o=this.getOptions(),s=o.query,u=o.variables,a=o.onCompleted,c=o.onError;if(this.previousOptions&&!this.previousData.loading&&Object(b.a)(this.previousOptions.query,s)&&Object(b.a)(this.previousOptions.variables,u))return;a&&!n?a(r):c&&n&&c(n)}}},e.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(v);function d(t,e,r){void 0===r&&(r=!1);var i=Object(n.useContext)(u()),o=Object(n.useReducer)((function(t){return t+1}),0),s=o[0],a=o[1],c=e?Object(l.a)(Object(l.a)({},e),{query:t}):{query:t},p=Object(n.useRef)();p.current||(p.current=new y({options:c,context:i,forceUpdate:a}));var h=p.current;h.setOptions(c),h.context=i;var v,d,f,O={options:Object(l.a)(Object(l.a)({},c),{onError:void 0,onCompleted:void 0}),context:i,tick:s},g=(v=function(){return r?h.executeLazy():h.execute()},d=O,(f=Object(n.useRef)()).current&&Object(b.a)(d,f.current.key)||(f.current={key:d,value:v()}),f.current.value),m=r?g[1]:g;return Object(n.useEffect)((function(){return h.afterExecute({lazy:r})}),[m.loading,m.networkStatus,m.error,m.data]),Object(n.useEffect)((function(){return function(){return h.cleanup()}}),[]),g}function f(t,e){return d(t,e,!1)}!function(t){function e(e){var r=e.options,i=e.context,n=e.result,o=e.setResult,s=t.call(this,r,i)||this;return s.runMutation=function(t){void 0===t&&(t={}),s.onMutationStart();var e=s.generateNewMutationId();return s.mutate(t).then((function(t){return s.onMutationCompleted(t,e),t})).catch((function(t){if(s.onMutationError(t,e),!s.getOptions().onError)throw t}))},s.verifyDocumentType(r.mutation,a.Mutation),s.result=n,s.setResult=o,s.mostRecentMutationId=0,s}Object(l.b)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,a.Mutation),t.client=this.refreshClient().client,[this.runMutation,t]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){var e=this.getOptions(),r=e.mutation,i=e.variables,n=e.optimisticResponse,o=e.update,s=e.context,u=void 0===s?{}:s,a=e.awaitRefetchQueries,c=void 0!==a&&a,p=e.fetchPolicy,h=Object(l.a)({},t),b=Object.assign({},i,h.variables);return delete h.variables,this.refreshClient().client.mutate(Object(l.a)({mutation:r,optimisticResponse:n,refetchQueries:h.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:c,update:o,context:u,fetchPolicy:p,variables:b},h))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var r=this.getOptions(),i=r.onCompleted,n=r.ignoreResults,o=t.data,s=t.errors,u=s&&s.length>0?new h.ApolloError({graphQLErrors:s}):void 0;this.isMostRecentMutation(e)&&!n&&this.updateResult({called:!0,loading:!1,data:o,error:u}),i&&i(o)},e.prototype.onMutationError=function(t,e){var r=this.getOptions().onError;this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),r&&r(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){!this.isMounted||this.previousResult&&Object(b.a)(this.previousResult,t)||(this.setResult(t),this.previousResult=t)}}(v);!function(t){function e(e){var r=e.options,i=e.context,n=e.setResult,o=t.call(this,r,i)||this;return o.currentObservable={},o.setResult=n,o.initialize(r),o}Object(l.b)(e,t),e.prototype.execute=function(t){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var e=t;this.refreshClient().isNew&&(e=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"==typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(b.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),e=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(l.a)(Object(l.a)({},e),{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var e=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),e&&e({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)}}(v);!function(){function t(){this.queryPromises=new Map,this.queryInfoTrie=new Map}t.prototype.registerSSRObservable=function(t,e){this.lookupQueryInfo(e).observable=t},t.prototype.getSSRObservable=function(t){return this.lookupQueryInfo(t).observable},t.prototype.addQueryPromise=function(t,e){return this.lookupQueryInfo(t.getOptions()).seen?e():(this.queryPromises.set(t.getOptions(),new Promise((function(e){e(t.fetchData())}))),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach((function(r,i){t.lookupQueryInfo(i).seen=!0,e.push(r)})),this.queryPromises.clear(),Promise.all(e)},t.prototype.lookupQueryInfo=function(t){var e=this.queryInfoTrie,r=t.query,i=t.variables,n=e.get(r)||new Map;e.has(r)||e.set(r,n);var o=JSON.stringify(i),s=n.get(o)||{seen:!1,observable:null};return n.has(o)||n.set(o,s),s}}()}}]);
//# sourceMappingURL=23.js.map