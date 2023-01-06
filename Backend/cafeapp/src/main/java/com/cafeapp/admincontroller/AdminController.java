package com.cafeapp.admincontroller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cafeapp.entities.Admin;
import com.cafeapp.entities.Customer;
import com.cafeapp.entities.ItemQuantity;
import com.cafeapp.entities.Order;
import com.cafeapp.helper.InfoOfCustomers;

import com.cafeapp.helper.OrderList;
import com.cafeapp.repo.AdminRepo;
import com.cafeapp.repo.CustomerRepo;
import com.cafeapp.repo.ItemRepo;
import com.cafeapp.repo.OrderRepo;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	CustomerRepo cust_repo;
	
	@Autowired
	OrderRepo ord_repo;
	
	@Autowired
	ItemRepo item_repo;
	
	@Autowired
	AdminRepo admin_repo;
	
	@GetMapping("/get/orders")
	public List<InfoOfCustomers> getCustomers(){
//		List<Customer> l_cust = cust_repo.findAll();
		List<Order> l_ord=ord_repo.findAll();
		List<InfoOfCustomers> allCustInfo=new ArrayList<>();
		for(Order c:l_ord) {
			InfoOfCustomers temp=new InfoOfCustomers();
			List<OrderList> o_list=new ArrayList<>();
//			
			temp.setOrd_id(c.getOrd_no());
			for(ItemQuantity iqe:c.getL_quan()) {
				@SuppressWarnings("deprecation")
				OrderList o=new OrderList(item_repo.getById(iqe.getItem_id()).getName(),iqe.getQuantity());
				o_list.add(o);
			}
			temp.setC_id(c.getCustomer().getId());
			temp.setC_name(c.getCustomer().getName());
			temp.setPhno(c.getCustomer().getPhno());
			temp.setStatus(c.getStatus());
			temp.setAmount(c.getAmount());
			temp.setOrderList(o_list);
			temp.setDate(c.getDate());
			allCustInfo.add(temp);
			
		}
		return allCustInfo;
	}
	
	@PostMapping("post/login")
	public String auth(@RequestBody Admin admin) {
		
		
		Admin ad=admin_repo.getAdminByEmail(admin.getEmail());
//		System.out.println(ad.getPwd()+" "+admin.getPwd());
		
		if(ad==null || ad.getEmail().equals(admin.getPwd()))
			return "failed";
		return "success";
	}
	
	
	@GetMapping ("update/status")
	public String updateStatus(@RequestParam("cid") String cid, @RequestParam("st") String st) {
//		System.out.println(st+" "+cid);
		Customer c=cust_repo.getById(Long.parseLong(cid));
		c.getOrder().setStatus(st);
		ord_repo.save(c.getOrder());
//		System.out.println(c.getOrder().getStatus());
//		System.out.println(ord_repo.findById(c.getOrder().getOrd_no()).get().getStatus());
		return "success";
	}
	
	
	@GetMapping("/get/ordersbydate")
	public List<InfoOfCustomers> getCustomersByDate(){
//		List<Customer> l_cust = cust_repo.findAll();
		List<Order> l_ord=ord_repo.getOrdersByDate();
		List<InfoOfCustomers> allCustInfo=new ArrayList<>();
		for(Order c:l_ord) {
			InfoOfCustomers temp=new InfoOfCustomers();
			List<OrderList> o_list=new ArrayList<>();
//			
			temp.setOrd_id(c.getOrd_no());
			for(ItemQuantity iqe:c.getL_quan()) {
				@SuppressWarnings("deprecation")
				OrderList o=new OrderList(item_repo.getById(iqe.getItem_id()).getName(),iqe.getQuantity());
				o_list.add(o);
			}
			temp.setC_id(c.getCustomer().getId());
			temp.setC_name(c.getCustomer().getName());
			temp.setPhno(c.getCustomer().getPhno());
			temp.setStatus(c.getStatus());
			temp.setAmount(c.getAmount());
			temp.setOrderList(o_list);
			temp.setDate(c.getDate());
			allCustInfo.add(temp);
			
		}
		return allCustInfo;
	}
	
	
	@GetMapping("/get/info")
	public Admin getAdmin(@RequestParam("email") String email) {
		return admin_repo.getAdminByEmail(email);
	}
	
	
	@PostMapping("/update/info")
	public String updateStatus(@RequestBody Admin admin) {
		admin_repo.save(admin);
		
		return "success";
	}
	
	
}
