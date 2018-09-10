import web_component from './HelloWorld.web.vue';
import app_component from './HelloWorld.app.vue';
let component: any;
if (process.env.type === 'app') {
  component = app_component;
} else {
  component = web_component;
}
export default component;
