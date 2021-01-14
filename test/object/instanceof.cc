#include "napi.h"

using namespace Napi;

Value InstanceOf(const CallbackInfo& info) {
  Object obj = info[0].As<Object>();
  Function constructor = info[1].As<Function>();
  return Boolean::New(info.Env(), obj.InstanceOf(constructor));
}
