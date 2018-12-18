package com.lingang.platform.controller.seek;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lingang.api.domain.basic.JsonResult;
import com.lingang.api.domain.basic.ServiceResult;
import com.lingang.api.domain.entity.SysRegion;
import com.lingang.api.service.SysRegionService;

@Controller
@RequestMapping("/sysRegion")
public class RegionController {

	@Resource
	private SysRegionService sysRegionService;

	/**
	 * @Description: (获取所有地区的详情_后台)
	 * @return 参数注释
	 * @author fqh (qihao.fu@outlook.com)
	 * @date: 2016年12月13日 下午5:32:32
	 */
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "/getRegionAll.do", method = { RequestMethod.GET, RequestMethod.POST })
	public JsonResult getRegionAll() {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Object> result = sysRegionService.selectRegionAllList();
		Map<String, Object> dataMap = result.getDataMap();
		List<SysRegion> list = (List<SysRegion>) dataMap.get("全部");
		jsonResult.setData(list);
		jsonResult.setStateCode(result.getStateCode());
		return jsonResult;
	}
}
