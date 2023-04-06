import SocialHandle from "../atoms/socialHandle";
import { socialHandlesData } from "../../../../../constants/socialHandlesData.constants";
import _ from "lodash";

function createSocialHandleComponent(value) {
  return <SocialHandle key={value.id} iconStyle={value.iconStyle} />;
}

function getSocialHandles() {
  const SocialHandleComponents = _.map(
    socialHandlesData,
    createSocialHandleComponent
  );

  return SocialHandleComponents;
}

export { getSocialHandles };
